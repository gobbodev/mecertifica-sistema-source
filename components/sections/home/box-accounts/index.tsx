import { AccountType } from "./account-type";
import { mockAccountsTypes } from "./mock-account-types";

export function BoxAccounts() {
  return (
    <div className="row-accounts">
      {mockAccountsTypes.map((accountType, index) => (
        <AccountType key={index} accountInfo={accountType}/>
      ))}
    </div>
  );
}
