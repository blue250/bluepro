<template>
  <div style="height: 700px;">
    <div id="c"></div>
  </div>
</template>

<script lang="ts" setup>
import lottie from "lottie-web";
import { onMounted } from "vue";
const props=defineProps(['path'])

  onMounted(()=>{
    
    lottie.loadAnimation({
    container: document.querySelector("#c") as Element,  //进行播放的元素
    renderer: "svg",
    loop: true,  //循环播放
    autoplay: true,  //自动播放
    path: props.path,  //要播放的文件
  }).setSpeed(0.6);
  
  // jsonAnimation.play();
  })
</script>

<style>
#c{
 
}
</style>