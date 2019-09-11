<template>
  <div class="app-container">
    <header>
      <h1>Social Media Manager</h1>
    </header>

    <main>
      <section>
        <h2>Accounts data</h2>
        <SMInput :title="facebookTitle"
                 :accountKey="facebookKey"
                 :associateAccountMethod="() => 'call fb API'">
        </SMInput>

        <SMInput :title="twitterTitle"
                 :accountKey="twitterkey"
                 :associateAccountMethod="() => 'call tw API'">
        </SMInput>

        <SMInput :title="instagramTitle"
                 :accountKey="instagramkey"
                 :associateAccountMethod="() => 'call instagram API'">
        </SMInput>
      </section>

      <section>
        <h2>Publication</h2>
        <textarea v-model="publication"></textarea>
        <button title="publish on associated accounts" @click=publish> Publish </button>
        <p>{{errorMessage}}</p>
      </section>
    </main>

    <footer>
      <p>made with ❤ by Edymberg</p>
    </footer>
  </div>
</template>

<script>

import SMInput from "./components/SMInput";
import {PUBLISH} from "./store";

export default {
  name: 'app',
  components: {
    SMInput,
  },
  data() {
    return {
      facebookTitle: 'Facebook',
      facebookKey: 'FACEBOOK',
      twitterTitle: 'Twitter',
      twitterkey: 'TWITTER',
      instagramTitle: 'Instagram',
      instagramkey: 'INSTAGRAM',
      publication: '',
      errorMessage: '',
    }
  },
  methods: {
    async publish() {
      await this.$store.dispatch(PUBLISH, {publication: this.publication, account: 'FB'})
      await this.$store.dispatch(PUBLISH, {publication: this.publication, account: 'INS'})

      if (this.publication.length > 250) {
        this.errorMessage = "Tw max length exceeded"
      } else {
        await this.$store.dispatch(PUBLISH, {publication: this.publication, account: 'INS'})
      }
    },
  },
}
</script>

<style lang="sass" scoped>
  @import 'styles/App'
</style>
