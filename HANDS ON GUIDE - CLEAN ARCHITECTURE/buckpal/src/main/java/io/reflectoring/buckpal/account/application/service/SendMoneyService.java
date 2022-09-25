package io.reflectoring.buckpal.account.application.service;

import io.reflectoring.buckpal.account.application.port.in.SendMoneyCommand;
import io.reflectoring.buckpal.account.application.port.in.SendMoneyUseCase;
import io.reflectoring.buckpal.account.application.port.out.AccountLock;
import io.reflectoring.buckpal.account.application.port.out.LoadAccountPort;
import io.reflectoring.buckpal.account.application.port.out.UpdateAccountStatePort;
import io.reflectoring.buckpal.common.UseCase;
import io.reflectoring.buckpal.account.domain.Account;
import io.reflectoring.buckpal.account.domain.Account.AccountId;

//annotations serve to add metadata to our code, these haven't effect in program execution
//lombok : it is a library that allow make annotations
import lombok.RequiredArgsConstructor;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

//the @ symbol only serves to make annotations, ti allows a less verbose code
@RequiredArgsConstructor
@UseCase
@Transactional //The @Transactional annotation is the metadata that specifies the semantics of the transactions on a method
//a TRANSACTION usually means a sequence of information exchange and related work (such as database updating) that is treated as a unit for the purposes of satisfying a request and for ensuring database integrity.

/* =============================== USE CASE SERVICE =============================== */
/* 
	- another example make a buy in Amazon and calculate close route to deliver product
	- register user and notify
 */
public class SendMoneyService implements SendMoneyUseCase {

	//pluggin the ports that our service need
	private final LoadAccountPort loadAccountPort;
	private final AccountLock accountLock;
	private final UpdateAccountStatePort updateAccountStatePort;
	private final MoneyTransferProperties moneyTransferProperties;

	@Override

	//SendMoneyCommand is part of use cases's API
	//with this method we modify the state of our domain entity
	public boolean sendMoney(SendMoneyCommand command) { //it returns a boolean becuase it is the minimal value to return

		// ============================================ validation source and target accounts in use case if it is not feasible to validate in domain entity before to work on damain entities
		// ============================================ another validation, for instance is if exists accounID in our database
		checkThreshold(command); //input model
								 //it is important that input model to persistence adapter lies within application core

		LocalDateTime baselineDate = LocalDateTime.now().minusDays(10);

		//using persistence adapter
								//receivin output model
		Account sourceAccount = loadAccountPort.loadAccount(
				command.getSourceAccountId(),
				baselineDate);
		//after to make a query to persistence adapter and database, it should receive a result
		Account targetAccount = loadAccountPort.loadAccount(
				command.getTargetAccountId(),
				baselineDate);

		AccountId sourceAccountId = sourceAccount.getId()
				.orElseThrow(() -> new IllegalStateException("expected source account ID not to be empty"));
		AccountId targetAccountId = targetAccount.getId()
				.orElseThrow(() -> new IllegalStateException("expected target account ID not to be empty"));

		accountLock.lockAccount(sourceAccountId);

		// ================================================ another validation
		if ( !sourceAccount.withdraw(command.getMoney(), targetAccountId ) ) {
			accountLock.releaseAccount(sourceAccountId);
			return false;
		}

		accountLock.lockAccount(targetAccountId);
		if ( !targetAccount.deposit(command.getMoney(), sourceAccountId ) ) {
			accountLock.releaseAccount(sourceAccountId);
			accountLock.releaseAccount(targetAccountId);
			return false;
		}

		//sending data to database
		updateAccountStatePort.updateActivities(sourceAccount);
		updateAccountStatePort.updateActivities(targetAccount);

		accountLock.releaseAccount(sourceAccountId);
		accountLock.releaseAccount(targetAccountId);
		return true;
	}

	private void checkThreshold(SendMoneyCommand command) {
		if(command.getMoney().isGreaterThan(moneyTransferProperties.getMaximumTransferThreshold())){
			throw new ThresholdExceededException(moneyTransferProperties.getMaximumTransferThreshold(), command.getMoney());
		}
	}

}




