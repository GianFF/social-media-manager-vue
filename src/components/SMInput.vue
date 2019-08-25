<template>
  <div class="sm-input-container">
    <h4>{{title}}</h4>
    <input type="text" v-model="inputContent"/>
    <button title="associate account" @click=associateAccount> ✓ </button>
  </div>
</template>

<script>

export default {
  name: 'sm-input',
  props: ['title', 'viewModel', 'accountKey'],
  data() {
    return {
      inputContent: '',
    }
  },
  methods: {
    updateAccount() {
      this.viewModel.updateAccount(this.inputContent, this.accountKey)
    },
    associateAccount() {
      this.updateAccount()
      this.viewModel.associateAccount(this.accountKey)
    },
  },
}
</script>

<style lang="sass" scoped>
  @import '../styles/SMInput'
</style>
