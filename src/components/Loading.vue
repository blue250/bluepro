<template>
  <div class="Loading">
    <div v-for="(item) in 600" :key="'load'+item" class="box"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted,onUnmounted} from 'vue'
let a:NodeJS.Timer
onMounted(()=>{
  a=setInterval(()=>{
    let boxs=document.querySelectorAll('.box')
  let num=Math.floor(Math.random()*boxs.length)
  boxs[num].classList.toggle('anim')
  })
})
onUnmounted(()=>{
  
  clearInterval(a)
})

</script>

<style lang="less">
 .Loading{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  overflow: hidden;
  justify-content: center;
  gap: 5px;
  .box{
    background: #d4fcf5;
    width: 60px;
    height: 60px;
  }
  .anim{
    animation: animate 1s linear forwards;
  }
  @keyframes animate {
    0%{}
    50%{
      background: red;
    }
    100%{
      background: #6cf;
    }
  }
 }
 @media screen and (max-width:992px){
  .Loading{
    .box{
      width: 40px;
      height: 40px;
    }
  }
}
</style>