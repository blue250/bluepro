<template>
  <div>
    <div id="c"></div>
  </div>
</template>

<script lang="ts" setup>
import lottie from "lottie-web";
import { onMounted } from "vue";
const props=defineProps(['path'])
const emits=defineEmits(['End'])
  onMounted(()=>{
    // console.log(11);
    
    
    const jsonAnimation= lottie.loadAnimation({
    container: document.querySelector("#c") as Element,  //进行播放的元素
    renderer: "svg",
    loop: true,  //循环播放
    autoplay: true,  //自动播放
    path: props.path,  //要播放的文件
  })
  
  jsonAnimation.setSpeed(0.6);
  // console.log(jsonAnimation.isLoaded,'jsonAnimation');
  jsonAnimation.addEventListener('DOMLoaded',()=>{
    // console.log('ok');
    emits('End',true)
  })
  
  })
</script>

<style>
#c{
 
}
</style>