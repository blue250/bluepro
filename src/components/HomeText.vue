<template>
  <div>
    <p>HI,我是<span style="color: #6cf;">blue</span>250,</p>
    <p>一个练习时长 <span style="color: red;">两年半</span> 的</p>
    <p> <span style="color:#6cf;text-decoration: underline;" @mouseover="VueHover" @mouseout="VueOut">VUE</span> 前端工程师。</p>
    <p class="Small" v-show="ShowSmall"><span id="more" ref="more"></span></p>
    <p>设计风格❓还不固定。</p>
    <p><span id="element" ref="element"></span></p>
  </div>
</template>

<script lang="ts" setup>
import TypeIt from "typeit";
import { TypeItInstance } from "typeit/types";
import { onMounted,ref,Ref } from "vue";
const element:Ref=ref(null)
const more:Ref=ref(null)
let VueHover=()=>{}
let VueOut=()=>{}
let ShowSmall:Ref=ref(false)

onMounted(()=>{
  const loop=new (TypeIt as TypeItInstance)(element.value, {
  speed: 150,
  loop: true,
}).type('经常玩玩游戏🎮。',{delay:900}).delete(6).type('聊聊技术📔。',{delay:900}).delete(6).type('去远处逛逛🛫。',{delay:900}).move(-7).delete(2).type('偶尔').move(null, { to: "END" }).go();

const hover=new (TypeIt as TypeItInstance)(more.value, {
  beforeString:()=>{
    loop.freeze()
  },
  afterComplete:()=>{
    loop.unfreeze()
    hover.destroy()
  },
  strings:'其实还会一些<span style="color: #6cf;">nodeexpress</span>与<span style="color: #6cf;">mongodb</span>',
  html:true,
  speed: 150,
})
VueHover=()=>{
  ShowSmall.value=true
  loop.freeze()
  hover.go()
}
VueOut=()=>{
  // loop.unfreeze()
  // hover.go()
  // hover.delete()
}
})
</script>

<style>

</style>