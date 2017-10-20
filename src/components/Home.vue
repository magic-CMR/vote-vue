<template>
  <div class="home">
    <div class="login-wrap">
      <login-form />
    </div>
    <div class="list-wrap">
      <list />
    </div>
    <div class="options-wrap">
      <options />
    </div>
    <div class="option-show-wrap">
      <vote-show />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import Options from './NewOption'
import List from './List'
import VoteShow from './VoteShow'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { LoginForm,Options,List,VoteShow }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    /*border: 2px solid yellow;*/
  }
  .login-wrap,.options-wrap,.list-wrap,.option-show-wrap {
    width: 90%;
    margin: 20px auto;
  }
</style>
