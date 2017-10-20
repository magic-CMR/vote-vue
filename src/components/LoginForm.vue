<template>
  <div class='login-form'>
    <div v-if="!isAuthentucated">你是
    <input v-model="username" placeholder="你的名字"/>
    <button @click="login">保存</button>
    </div>
    <div v-else>我是{{ currentUser }}</div>
  </div>
</template>

<script>
  export default {
    name: 'login-form',
    data: function (){
      return {
        username:''
      }
    },
    computed:{
      isAuthentucated: function(){
        return this.$store.state.auth.isAuthentucated
      },
      currentUser: function(){
        return this.$store.state.auth.currentUser
      }
    },
    methods:{
      login: function(){
        if (!this.username.trim()) return
        this.$store.commit({type:'login',username:this.username})
      }
    }
  }
</script>

<style scoped>
  .login-form {
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    padding: 20px 10px;
  }
  input {
    border: 0;
    border-bottom: 2px solid #00bcd4;
    padding: 5px;
    font-size: 18px;
    text-indent:9px;
    margin-left: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
  input:focus {
    outline: 0;
  }
  button{
    border: 0;
    background-color: deeppink;
    padding:0;
    margin: 0;
    line-height: 22px;
    width: 50px;
    color: #fff;
  }
</style>
