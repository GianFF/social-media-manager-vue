import {FacebookManager} from "./account-managers/FacebookManager";
import {TwitterManager} from "./account-managers/TwitterManager";
import {InstagramManager} from "./account-managers/InstagramManager";

export class SocialMediaManager {
  constructor(store) {
    this.managers = [
      new FacebookManager(store),
      new TwitterManager(store),
      new InstagramManager(store),
    ]
    this.publication = ''
  }


  facebookName() {
    return 'Facebook'
  }

  instagramName() {
    return 'Instagram'
  }

  twitterName() {
    return 'Twitter'
  }

  titleFor(socialMediaName) {
    return this.selectManagerByName(socialMediaName).title
  }

  associateAccount(socialMediaName) {
    this.selectManagerByName(socialMediaName).associateAccount()
  }

  updateAccount(account, socialMediaName) {
    this.selectManagerByName(socialMediaName).updateAccount(account)
  }

  updatePublication(publication) {
    this.publication = publication
  }

  publish() {
    this.managers.forEach((manager) => manager.publish(this.publication))
  }


  // private

  selectManagerByName(socialMediaName) {
    return this.managers.find((manager) => manager.is(socialMediaName))
  }
}
