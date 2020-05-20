import {AccountManager} from "./AccountManager";
import {SET_INS_ACCOUNT} from "../../store";

export class InstagramManager extends AccountManager {
  constructor(store) {
    super(store)
    this.title = 'Instagram'
    this.updateAccountMutation = SET_INS_ACCOUNT
    this.associateAccountMethod = () => 'call instagram API'
  }

  validateAccount() {
    // TODO: do something async
    // eslint-disable-next-line no-console
    console.log("In account validated: ", this.account)
  }
}
