import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import CircuitBreaker from 'opossum'; //circuti breker library
import { firstValueFrom } from 'rxjs';

interface ChargePayload {
  userId: string;
  amount: number;
  currency: string;
}

@Injectable()
export class PaymentClientService {
  private readonly logger = new Logger(PaymentClientService.name);

  private readonly breaker: CircuitBreaker<[ChargePayload], any>;

  constructor(private readonly http: HttpService) {
    // Function that opossum will wrap
    const chargeFn = async (payload: ChargePayload) => {
      const response$ = this.http.post(
        'https://payments.example.com/api/charge',
        payload,
        {
          timeout: 3000, // axios timeout
        },
      );

      const res = await firstValueFrom(response$);
      return res.data;
    };

    this.breaker = new CircuitBreaker(chargeFn, {
      timeout: 5000, // if chargeFn takes more than 5s -> failure
      errorThresholdPercentage: 50, // 50% failures in window -> open circuit
      resetTimeout: 10000, // after 10s try "half-open"
      rollingCountTimeout: 10000,
      rollingCountBuckets: 10,
    });
    // Optional fallback: return something “safe” when circuit is open
    this.breaker.fallback((payload: ChargePayload) => {
      this.logger.warn(
        `Fallback for payment of user ${payload.userId}, amount: ${payload.amount}`,
      );

      return {
        status: 'PENDING',
        message: 'Payment service unavailable, marked as pending',
      };
    });

    // Listen to breaker events (for logs / metrics)
    this.breaker.on('open', () => {
      this.logger.warn('Payment circuit OPEN – external service is failing');
    });

    this.breaker.on('halfOpen', () => {
      this.logger.log('Payment circuit HALF-OPEN – trying a test request');
    });

    this.breaker.on('close', () => {
      this.logger.log('Payment circuit CLOSED – service deemed healthy again');
    });

    this.breaker.on('failure', (error) => {
      this.logger.warn(`Payment call FAILED: ${error?.message || error}`);
    });

    this.breaker.on('success', () => {
      this.logger.debug('Payment call SUCCESS');
    });
  }

  async charge(payload: ChargePayload) {
    // All callers use this method
    return this.breaker.fire(payload);
  }

  // Optional: expose breaker state for monitoring or health endpoints
  getStatus() {
    return {
      name: this.breaker.name || 'payment-breaker',
      closed: this.breaker.closed,
      open: this.breaker.opened,
      halfOpen: this.breaker.halfOpen,
      stats: this.breaker.stats,
    };
  }
  isUnavailable(err?: unknown) {
    // 1) Breaker is open
    if (this.breaker.opened) return true;

    // 2) Opossum error with code EOPENBREAKER
    if (err && typeof err === 'object' && 'code' in err) {
      // @ts-ignore
      return err.code === 'EOPENBREAKER';
    }

    // 3) Optionally check HTTP statuses, e.g. 503/504
    // if (err && (err as any).response?.status === 503) return true;

    return false;
  }
}
