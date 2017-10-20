const state ={
  isAuthentucated:false,
  currentUser:''
}

const mutations ={
  login(state ,{ username }){
    state.currentUser = username
    state.isAuthentucated= true
  }
}


export default{
  state,
  mutations
}
