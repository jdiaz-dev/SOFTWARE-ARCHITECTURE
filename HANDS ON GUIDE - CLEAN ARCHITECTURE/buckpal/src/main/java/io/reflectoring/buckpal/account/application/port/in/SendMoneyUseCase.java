package io.reflectoring.buckpal.account.application.port.in;

import io.reflectoring.buckpal.account.domain.Account.AccountId;
import io.reflectoring.buckpal.account.domain.Money;
import io.reflectoring.buckpal.common.SelfValidating;


//it is an interface for use case
public interface SendMoneyUseCase {

	//every use case has its own model (command)
	boolean sendMoney(SendMoneyCommand command);

}
