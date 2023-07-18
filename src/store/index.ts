import {createStore} from 'vuex'
interface state{
  DomId:string,
  Header:number,
  FrezzActive:boolean,
  Origin:string,
  ScrollPage:number,
  Top:number,
  ScreenH:number
}
const state:state={
  DomId:'home',
  Header:0,
  FrezzActive:false,
  Origin:'PC',
  ScrollPage:0,
  Top:0,
  ScreenH:0,
}

const getters={
  HomeHeight(state:state){
    return `${state.ScreenH}px - ${state.Header}px`
  },
  MarginTop(state:state){
    return state.Header
  },
  ScreenH(state:state){
    return {height:state.ScreenH+'px'}
  }
  // Top(){
  //   return state.Top
  // }
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
  },
  Origin:(state:state,value:state['Origin'])=>{
    state.Origin=value
  },
  ScrollPage:(state:state,value:state['ScrollPage'])=>{
    state.ScrollPage=value
  },
  Top:(state:state,value:state['Top'])=>{
    state.Top=value
  },
  ScreenH:(state:state,value:state['ScreenH'])=>{
    state.ScreenH=value
  },
}
export default createStore({
  state,
  mutations,
  actions:{},
  getters
})