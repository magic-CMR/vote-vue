<template >
  <div class="vote-show">
    <div class="options-list" >

    </div>
    <div class="show-votes-bar">
      <div class="bar" v-for="vote in votes">
        <result-svg :votes="vote"
        ></result-svg>
      </div>
    </div>
  </div>
</template>

<script>
import ResultSvg from './ResultSvg'

export default {
  name:'vote-show',
  components:{ ResultSvg },
  computed:{
    options: function (){
      return this.$store.state.vote.options
    },
    votes:function(){
      let votes= this.options.map(t => {
        const voteCount =this.$store.state.vote.votes.filter(j => j.optionId === t.id )
        return {
          name:t.text,
          id:t.id,
          voteCount
        }
      })
      return votes.sort(function (a, b) {
        return a.voteCount.length - b.voteCount.length;
      }).slice().reverse()
    }
  }
}
</script>

<style scoped>
  .vote-show{
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    line-height: 1.8;
    padding: 20px 10px;
    display: flex;
  }
  .options-list{
    display:flex;
    flex-direction: column;
  }
  .show-votes-bar{
    margin: 0 auto;
  }
</style>
