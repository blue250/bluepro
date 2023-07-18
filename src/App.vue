<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref, Ref, reactive} from 'vue'
import { throttle, SrcollToA, Origin } from './util/common'

import Banner from './components/Banner.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Pro from './components/Pro.vue'
import LinkMe from './components/LinkMe.vue'
const em=reactive(['💦','💤','💥','🕑','🤴'])
const emV=ref(0)
let emtimer:NodeJS.Timer;
const ran=()=>{
  emtimer=setInterval(()=>{
    emV.value=Math.floor(Math.random()*5)
  },300)
}
ran()
let loading=ref(true)
window.onload=()=>{
  clearInterval(emtimer)
  // console.log(111);
  loading.value=false
}
const BannerRef: Ref = ref(null)
const HomeRef: Ref = ref(null)
const AboutRef: Ref = ref(null)
const ProRef: Ref = ref(null)
const LinkMeRef: Ref = ref(null)
const IdList = reactive(['home', 'about', 'pro','linkme'])//首页id集合 用于整屏滚动

const ComponHeight: number[] = reactive([0, 0, 0, 0])

const CommitHeader = () => {
  store.commit('Header', BannerRef.value.$el.clientHeight)
}

// const ReSetActive = (scrollTop: number) => {
//   // 因为每个页面其实都不是占整屏的 所以要想activeclass跟着变  每一级都要多加一些
//   if (scrollTop >= ComponHeight[0]) {
//     store.state.DomId = 'home'
//   }
//   if (scrollTop+BannerRef.value.$el.clientHeight >= ComponHeight[1]) {
//     store.state.DomId = 'about'
//   }
//   if (scrollTop+BannerRef.value.$el.clientHeight*2 >= ComponHeight[2]) {
//     store.state.DomId = 'pro'
//   }
// }
/**
 * 解冻banner activeclass 冻结时不可以修改active
 * 解冻使滚动可以切换
 */
// const ReFrezz = debounce(() => {
//   store.commit('FrezzActive', false)
// },110)


// 上一次滚动的位置

onMounted(() => {
  CommitHeader()
  ComponHeight[0] = HomeRef.value.$el.offsetTop
  ComponHeight[1] = AboutRef.value.$el.offsetTop
  ComponHeight[2] = ProRef.value.$el.offsetTop
  ComponHeight[3] = LinkMeRef.value.$el.offsetTop

  window.onresize = throttle(() => {
    Origin()
    CommitHeader()
    // SrcollToA(IdList[store.state.ScrollPage])
  }, 100)
  // 滚动时防抖 每100ms处罚一次事件 重新改变activeclass
  // window.onscroll = throttle(() => {
  //   scrollTop.value = (document.documentElement.scrollTop || document.body.scrollTop)
  //   if (!store.state.FrezzActive) {
  //     ReSetActive(scrollTop.value)
  //   }
  //   ReFrezz()
  // }, 100)
})


let ScrollCount = ref(0)//滑动距离
let Start = ref(0)//移动端开始与结束
let End = ref(0)
const PcScroll = (e:any) => {
  // pc端
  if (e.wheelDeltaY < 0 && store.state.ScrollPage < IdList.length - 1) {
    store.commit('ScrollPage', store.state.ScrollPage + 1)
    SrcollToA(IdList[store.state.ScrollPage])
  }
  if (e.wheelDeltaY > 0 && store.state.ScrollPage >= 1) {
    store.commit('ScrollPage', store.state.ScrollPage - 1)
    SrcollToA(IdList[store.state.ScrollPage])
  }

  ScrollCount.value += e.wheelDeltaY
  console.log(e.wheelDeltaY, ScrollCount.value);
}//pc与移动端滑动函数
const PeScroll = (e:any) => {
  console.log(1,'1');
  
  e.type == 'touchstart' && (Start.value = e.changedTouches[0].screenY)
  e.type == 'touchend' && (End.value = e.changedTouches[0].screenY)
  // 移动端
  if (e.type == 'touchend') {
    console.log(Start.value, End.value, 'e');
    if (Start.value - End.value > 40 && store.state.ScrollPage < IdList.length - 1) {
      store.commit('ScrollPage', store.state.ScrollPage + 1)
      SrcollToA(IdList[store.state.ScrollPage])

    }
    if (Start.value - End.value < -40 && store.state.ScrollPage >= 1) {
      store.commit('ScrollPage', store.state.ScrollPage - 1)
      SrcollToA(IdList[store.state.ScrollPage])
    }
  }
}
// 整屏滚动代码
const ScrollPage = (e:any, o:string) => {
  if (!store.state.FrezzActive) {
    if (store.state.Origin == 'PC' && e.type == 'wheel' && o == 'PC') {
      PcScroll(e)
    }
    if (store.state.Origin == 'PE' && o == 'PE') {
      PeScroll(e)
    }
  }
  // console.log(e,'e');



}



</script>

<template>
  <div style="height: 100vh;overflow: hidden;position: relative;" class="app">
    <div @wheel="ScrollPage($event, 'PC')" @touchend="ScrollPage($event, 'PE')" @touchstart="ScrollPage($event, 'PE')"
      style="position: absolute;transition: all .3s ease-in-out;" :style="{ top: -store.state.Top + 'px' }">
      <Banner ref="BannerRef" @wheel.stop="" @touchmove.stop=""></Banner>
      <Home ref="HomeRef"></Home>
      <About ref="AboutRef"></About>
      <Pro ref="ProRef"></Pro>
      <LinkMe ref="LinkMeRef"></LinkMe>
    </div>
    <div style="height: 100vh;width: 100%;" class="loading" v-show="loading">
    Loading...{{ em[emV] }}
    </div>
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped lang="less">
.app{
  position: relative;
}
.loading{
  z-index: 3;
  background: #fffff1;
  position: absolute;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 60px;
  // background: repeating-linear-gradient(rgb(39, 181, 252),rgb(203, 252, 27));
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // position: relative;
  // // text-align: center;
  // overflow: hidden;
  // transition: all 0.3s;
//   &::before {

// content: '';
// // background-size: cover;
// background: #fffaea;
// background-position: center;
// // background-position: 50% 50%;
// position: absolute;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// z-index: -99;
// }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
