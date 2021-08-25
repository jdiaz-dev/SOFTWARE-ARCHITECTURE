package io.reflectoring.buckpal.account.application.port.in;

import io.reflectoring.buckpal.account.domain.Account.AccountId;
import io.reflectoring.buckpal.account.domain.Money;

//it is an interface to query
public interface GetAccountBalanceQuery {

	Money getAccountBalance(AccountId accountId);

}
