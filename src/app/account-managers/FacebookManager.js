import {AccountManager} from "./AccountManager";
import {SET_FB_ACCOUNT} from "../../store";

export class FacebookManager extends AccountManager {
  constructor(store) {
    super(store)
    this.title = 'Facebook'
    this.updateAccountMutation = SET_FB_ACCOUNT
    this.associateAccountMethod = () => 'call fb API'
  }

  validateAccount() {
    // TODO: do something async
    // eslint-disable-next-line no-console
    console.log("Fb account validated: ", this.account)
  }
}
