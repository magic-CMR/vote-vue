<template >
  <div class="new-option">
    <input v-model="text" placeholder="投票项"/>
    <button @click="addOption">添加</button>
  </div>
</template>

<script>
export default {
  name:'new-option',
  data: function (){
    return {
      text:''
    }
  },
  methods:{
    addOption: function (){
      let optioned = this.$store.state.vote.options.filter(t => t.text ==this.text)
      if(optioned.length){
        alert('此项已有')
        return
      }
      var shortid = require('shortid')
      if(!this.text){ return }
      let text ={
        text:this.text,
        id: shortid.generate()
      }
      this.$store.commit({
        type: 'addOption',
        text
      })
      console.log(this.$store.state.vote.options)
      this.text = ''
    }
  }
}
</script>

<style scoped>
  .new-option {
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
