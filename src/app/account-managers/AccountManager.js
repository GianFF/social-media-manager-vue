import {ASSOCIATE_ACCOUNT} from "../../store";

export class AccountManager {
  updateAccountMutation
  associateAccountMethod

  constructor(store) {
    this.account = ''
    this.store = store
  }

  associateAccount() {
    this.validateAccount()
    this.store.dispatch(ASSOCIATE_ACCOUNT, {
      account: this.account,
      method: this.associateAccountMethod
    })
  }

  validateAccount() {
    throw new Error('Subclass responsibility')
  }

  updateAccount(account) {
    this.account = account
    this.store.commit(this.updateAccountMutation, this.account)
  }

  // eslint-disable-next-line no-unused-vars
  has(key) {
    throw new Error('Subclass responsibility')
  }
}
