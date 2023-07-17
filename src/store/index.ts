import {createStore} from 'vuex'
interface state{
  DomId:string,
  Header:number,
  FrezzActive:boolean
}
const state:state={
  DomId:'home',
  Header:0,
  FrezzActive:false,
}

const getters={
  HomeHeight(state:state){
    return '100vh - '+state.Header+'px'
  }
}

const mutations={
  FrezzActive:(state:state,value:boolean)=>{
    state.FrezzActive=value
  },
  DomId:(state:state,value:string)=>{
    state.DomId=value
  },
  Header:(state:state,value:state['Header'])=>{
    state.Header=value
  }
}
export default createStore({
  state,
  mutations,
  actions:{},
  getters
})