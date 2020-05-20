import {ASSOCIATE_ACCOUNT, PUBLISH} from "../../store";

export class AccountManager {
  updateAccountMutation
  associateAccountMethod
  title

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

  publish(publication) {
    this.store.dispatch(PUBLISH, publication)
  }

  is(socialMediaName) {
    return this.title === socialMediaName
  }
}
