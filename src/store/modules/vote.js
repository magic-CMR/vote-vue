
const state ={
  options:[
    {
      text: '麻婆豆腐',
      id: 1
    },
    {
      text: '红烧鸡块',
      id: 2
    }
  ],
  votes:[
    {
      voter: 'ds',
      optionId: 2,
      id: 1
    },
    {
      voter: 'xs',
      optionId: 2,
      id: 2
    },
    {
      voter: '哈哈',
      optionId: 1,
      id: 3
    }
  ]
}

const mutations ={
  addOption(state ,{text}){
    state.options.push(text)
  },
  voteup(state, {vote} ){
    state.votes.push(vote)
  },
  votedown(state, {vote}){
    let voterId = state.votes.find(t => t.voter == vote.voter).id
    state.votes = state.votes.filter(t => t.id !== voterId)
  }
}
export default{
  state,
  mutations
}
