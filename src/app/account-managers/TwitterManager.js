import {AccountManager} from "./AccountManager";
import {PUBLISH, SET_TW_ACCOUNT} from "../../store";

export class TwitterManager extends AccountManager {
  static key = 'TWITTER'
  static title = 'Twitter'
  static maxCharactersLength = 250

  constructor(store) {
    super(store)
    this.updateAccountMutation = SET_TW_ACCOUNT
    this.associateAccountMethod = () => 'call tw API'
  }

  validateAccount() {
    // TODO: do something async
    // eslint-disable-next-line no-console
    console.log("Tw account validated: ", this.account)
  }

  publish(publication) {
    this.validatePublication(publication)
    this.store.dispatch(PUBLISH, publication)
  }

  validatePublication(publication) {
    if (publication.length > TwitterManager.maxCharactersLength) {
      throw new Error("Tw max length exceeded")
    }
  }

  has(key) {
    return TwitterManager.key === key
  }
}
