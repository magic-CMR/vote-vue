<template >
  <div class="result-svg">
    <div class="title" >
      {{ votes.name }}
    </div>
    <div class="piechart">
      <svg width="100" height="100" viewBox="0 0 32 32">
       <circle id="background"
       r="16" cx="16" cy="16" fill="#FFFFFF" stroke="yellow" stroke-width="11"  />
       <circle id="percent"
       r="16" cx="16" cy="16" fill="#FFFFFF" fill-opacity="0.5" stroke="deeppink"  stroke-width="11" :stroke-dasharray="percentStr" />
       <!-- stroke-dasharray value = "percentage" of light pink -->
      </svg>
      <h3> {{ percent + '%'}}</h3>

    </div>
  </div>

</template>

<script>
export default {
  name:'result-svg',
  props:['votes'],
  computed:{
    percent:function(){
      return parseInt(this.votes.voteCount.length/this.$store.state.vote.votes.length *100)
    },
    percentStr:function(){
      return this.percent + ' 100'
    }
  }
}
</script>

<style scoped>
.result-svg{
  margin: 0 auto;
}
svg {
  transform: rotate(-90deg);
  border-radius: 50%;
  width: 130px;
  height: 130px;
}

.title{
  margin: 0 auto;
  color: red;
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
}
.piechart{
  margin: 0 auto;
  text-align: center;
}
</style>
