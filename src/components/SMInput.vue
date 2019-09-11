<template>
  <div class="sm-input-container">
    <h4>{{title}}</h4>
    <input type="text" v-model="inputContent"/>
    <button title="associate account" @click=associateAccount> ✓ </button>
  </div>
</template>

<script>

  import {ASSOCIATE_ACCOUNT, SET_ACCOUNT} from "../store";

export default {
  name: 'sm-input',
  props: ['title', 'accountKey', 'associateAccountMethod'],
  data() {
    return {
      inputContent: '',
    }
  },
  methods: {
    updateAccount() {
      this.$store.commit(SET_ACCOUNT, {account: this.inputContent, key: this.accountKey})
    },
    validateAccount() {
      if (this.accountKey === 'FACEBOOK') {
        // eslint-disable-next-line no-console
        console.log("Fb account validated: ", this.inputContent)
      }
      if (this.accountKey === 'TWITTER') {
        // eslint-disable-next-line no-console
        console.log("Tw account validated: ", this.inputContent)
      }
      if (this.accountKey === 'INSTAGRAM') {
        // eslint-disable-next-line no-console
        console.log("Instagram account validated: ", this.inputContent)
      }
    },
    associateAccount() {
      this.updateAccount()
      this.validateAccount()
      this.$store.dispatch(ASSOCIATE_ACCOUNT, {
        account: this.accountKey,
        method: this.associateAccountMethod
      })
    },
  },
}
</script>

<style lang="sass" scoped>
  @import '../styles/SMInput'
</style>
