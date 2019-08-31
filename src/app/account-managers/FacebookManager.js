import {AccountManager} from "./AccountManager";
import {PUBLISH, SET_FB_ACCOUNT} from "../../store";

export class FacebookManager extends AccountManager {
  static key = 'FACEBOOK'
  static title = 'Facebook'

  constructor(store) {
    super(store)
    this.updateAccountMutation = SET_FB_ACCOUNT
    this.associateAccountMethod = () => 'call fb API'
  }

  validateAccount() {
    // TODO: do something async
    // eslint-disable-next-line no-console
    console.log("Fb account validated: ", this.account)
  }

  publish(publication) {
    this.store.dispatch(PUBLISH, publication)
  }

  has(key) {
    return FacebookManager.key === key
  }
}
