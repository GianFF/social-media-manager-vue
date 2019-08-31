<template>
  <div class="app-container">
    <header>
      <h1>Social Media Manager</h1>
    </header>

    <main>
      <section>
        <h2>Accounts data</h2>
        <SMInput :viewModel="viewModel"
                 :title="facebookTitle"
                 :accountKey="facebookKey">
        </SMInput>

        <SMInput :viewModel="viewModel"
                 :title="twitterTitle"
                 :accountKey="twitterkey">
        </SMInput>

        <SMInput :viewModel="viewModel"
                 :title="instagramTitle"
                 :accountKey="instagramkey">
        </SMInput>
      </section>

      <section>
        <h2>Publication</h2>
        <textarea v-model="publication"></textarea>
        <button title="publish on associated accounts" @click=publish> Publish </button>
      </section>
    </main>

    <footer>
      <p>made with ❤ by Edymberg</p>
    </footer>
  </div>
</template>

<script>

import {SocialMediaManager} from "./app/SocialMediaManager";
import {FacebookManager} from "./app/account-managers/FacebookManager";
import {InstagramManager} from "./app/account-managers/InstagramManager";
import {TwitterManager} from "./app/account-managers/TwitterManager";
import SMInput from "./components/SMInput";

export default {
  name: 'app',
  components: {
    SMInput,
  },
  data() {
    return {
      viewModel: new SocialMediaManager(this.$store),
      facebookTitle: FacebookManager.title,
      facebookKey: FacebookManager.key,
      twitterTitle: TwitterManager.title,
      twitterkey: TwitterManager.key,
      instagramTitle: InstagramManager.title,
      instagramkey: InstagramManager.key,
      publication: '',
    }
  },
  methods: {
    updatePublication() {
      this.viewModel.updatePublication(this.publication)
    },
    publish() {
      this.updatePublication()
      this.viewModel.publish()
    },
  },
}
</script>

<style lang="sass" scoped>
  @import 'styles/App'
</style>
