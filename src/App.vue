<template>
  <div class="app-container">
    <header>
      <h1>Social Media Manager</h1>
    </header>

    <main>
      <section>
        <h2>Accounts data</h2>
        <SMInput :viewModel="viewModel" :socialMediaName="facebook"/>
        <SMInput :viewModel="viewModel" :socialMediaName="instagram"/>
        <SMInput :viewModel="viewModel" :socialMediaName="twitter"/>
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
import SMInput from './components/SMInput'
import {SocialMediaManager} from "./app/SocialMediaManager";

export default {
  name: 'app',
  components: {
    SMInput,
  },
  data() {
    const socialMediaManager = new SocialMediaManager(this.$store);
    return {
      viewModel: socialMediaManager,
      publication: '',
      facebook: socialMediaManager.facebookName(),
      instagram: socialMediaManager.instagramName(),
      twitter: socialMediaManager.twitterName(),
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
