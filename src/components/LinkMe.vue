<template>
  <div id="linkme" :style="backgroundPosition()" v-lazy="bgList[0]">
    <div>
      <h1 style="font-size: 50px;">想联系我？</h1>
      <h1 v-show="store.state.Origin == 'PC'" style="font-size: 50px;">按住Ctrl将会在新页面打开</h1>
      <!-- <h2>点击下方图标</h2> -->
      <!-- <h1 v-show="store.state.Origin=='PE'" style="font-size: 60px;">点击</h1> -->
    </div>
    <div>
      <div class="LinkIcon">
        <a href="mailto:885054824@qq.com"><img v-lazy="imgList[0]" alt="" srcset=""></a>
        <a href="https://github.com/blue250"><img v-lazy="imgList[1]" alt="" srcset=""></a>
      </div>
      <div style="display: flex;
    justify-content: center;
      ">
        <div style="text-align: center;">
          <h1 class="WhiteB">或扫描微信二维码</h1>
          <h3>请备注来意</h3>
          <div v-lazy="qrcode">
            <img src="" style="width: 300px;" alt="" srcset="">
          </div>
        </div>
      </div>

    </div>


    <!-- <div style="height: 100%;position: relative;">
      <video src="video/findmeleg.mp4" autoplay muted loop class="video"></video>
    </div> -->
    <div class="Beian">
      <div>备案号：正在备案中</div>
      <!-- <div>blue250</div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgList=[new URL('@/assets/img/qq.svg', import.meta.url).href,new URL('@/assets/img/github.svg', import.meta.url).href]
const bgList=[new URL('@/assets/img/repeatsm.jpg', import.meta.url).href,new URL('@/assets/img/github.svg', import.meta.url).href]
import { reactive, ref } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
let xy = reactive([300, 600])
const backgroundPosition = () => {
  let a = { backgroundPosition: `${xy[0]}px ${xy[1]}px`, 'height': 'calc(' + store.getters.HomeHeight + ')' }
  return a
}
const qrcode = ref(new URL('@/assets/img/qrcode.png', import.meta.url).href)
</script>

<style lang="less">
#linkme {
  padding: 0 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s;
  // background-position: 50% 50%;

  &::before {

    content: '';
    // background-size: cover;
    background-image: url(@/assets/img/font.jpg);
    background-position: center;
    // background-position: 50% 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -99;
  }

  .LinkIcon {
    display: flex;
    justify-content: center;

    a {
      width: 48px;
      height: 48px;

      img {
        width: 100%;
      }
    }
  }

  .Beian {
    // display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background:rgba(#ffd,0.5) ;
    -webkit-text-fill-color: black;
    // width: 80%;
    padding: 10px 20px;
    border-radius: 20px;
    div{
      // width: 50%;
    }
  }

  @media screen and (max-width:992px) {
    h1 {
      font-size: 28px !important;
    }

    &::before {
      background-size: cover;
    }

  }
}

// #linkme{
//   .video{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100%;
//     object-fit: cover;
//     object-position: top center;
//     z-index: 1;
//   }
// }</style>