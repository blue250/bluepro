<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref, Ref, reactive } from 'vue'
import { throttle, debounce, SrcollToA } from './util/common'

import Banner from './components/Banner.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Pro from './components/Pro.vue'
const BannerRef: Ref = ref(null)
const HomeRef: Ref = ref(null)
const AboutRef: Ref = ref(null)
const ProRef: Ref = ref(null)
const IdList=reactive(['home','about','pro'])//首页id集合 用于整屏滚动

const ComponHeight: number[] = reactive([0, 0, 0, 0])

const CommitHeader = () => {
  store.commit('Header', BannerRef.value.$el.clientHeight)
}

const ReSetActive = (scrollTop: number) => {
  // 因为每个页面其实都不是占整屏的 所以要想activeclass跟着变  每一级都要多加一些
  if (scrollTop >= ComponHeight[0]) {
    store.state.DomId = 'home'
  }
  if (scrollTop+BannerRef.value.$el.clientHeight >= ComponHeight[1]) {
    store.state.DomId = 'about'
  }
  if (scrollTop+BannerRef.value.$el.clientHeight*2 >= ComponHeight[2]) {
    store.state.DomId = 'pro'
  }
}
/**
 * 解冻banner activeclass 冻结时不可以修改active
 * 解冻使滚动可以切换
 */
const ReFrezz = debounce(() => {
  store.commit('FrezzActive', false)
},110)

let scrollTop: Ref = ref(0)

// 上一次滚动的位置

onMounted(() => {
  CommitHeader()
  ComponHeight[0] = HomeRef.value.$el.offsetTop
  ComponHeight[1] = AboutRef.value.$el.offsetTop
  ComponHeight[2] = ProRef.value.$el.offsetTop
  
  window.onresize = throttle(() => {
    CommitHeader()
  }, 100)
  // 滚动时防抖 每100ms处罚一次事件 重新改变activeclass
  window.onscroll = throttle(() => {
    scrollTop.value = (document.documentElement.scrollTop || document.body.scrollTop)
    if (!store.state.FrezzActive) {
      ReSetActive(scrollTop.value)
    }
    ReFrezz()
  }, 100)
})


</script>

<template>
  <div>
    <Banner ref="BannerRef"></Banner>
    <Home ref="HomeRef"></Home>
    <About ref="AboutRef"></About>
    <Pro ref="ProRef"></Pro>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
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
