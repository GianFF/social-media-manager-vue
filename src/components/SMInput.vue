<template>
  <div class="sm-input-container">
    <h4>{{title()}}</h4>
    <input type="text" v-model="inputContent"/>
    <button title="associate account" @click=associateAccount> ✓ </button>
  </div>
</template>

<script>

export default {
  name: 'sm-input',
  props: ['viewModel', 'socialMediaName'],
  data() {
    return {
      inputContent: '',
    }
  },
  methods: {
    title() {
      return this.viewModel.titleFor(this.socialMediaName)
    },
    updateAccount() {
      this.viewModel.updateAccount(this.inputContent, this.socialMediaName)
    },
    associateAccount() {
      this.updateAccount()
      this.viewModel.associateAccount(this.socialMediaName)
    },
  },
}
</script>

<style lang="sass" scoped>
  @import '../styles/SMInput'
</style>
