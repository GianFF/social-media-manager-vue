import {AccountManager} from "./AccountManager";
import {PUBLISH, SET_INS_ACCOUNT} from "../../store";

export class InstagramManager extends AccountManager {
  static key = 'INSTAGRAM'
  static title = 'Instagram'

  constructor(store) {
    super(store)
    this.updateAccountMutation = SET_INS_ACCOUNT
    this.associateAccountMethod = () => 'call instagram API'
  }

  validateAccount() {
    // TODO: do something async
    // eslint-disable-next-line no-console
    console.log("In account validated: ", this.account)
  }

  publish(publication) {
    this.store.dispatch(PUBLISH, publication)
  }

  has(key) {
    return InstagramManager.key === key
  }
}
