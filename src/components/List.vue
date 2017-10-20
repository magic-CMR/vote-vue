<template >
  <div class="list">
    <div class="option" v-for="option in options">
        <vote-option
        :option="option"
        ></vote-option>
    </div>
  </div>
</template>

<script>
import VoteOption from './VoteOption'

export default {
  name:'list',
  components: { VoteOption },
  data:function(){
    return {

    }
  },
  computed:{
    options: function (){
      return this.$store.state.vote.options
    }
  }
}
</script>

<style scoped>
/*.option {
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
  font-size: 20px;
  text-align: center;
  line-height: 1.8;
  padding: 10px;
  margin-top: 15px;
  text-align: center;
}*/
</style>
