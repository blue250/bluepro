<template>
  <div id="linkme" :style="backgroundPosition()">
    <div>
      <h1 style="font-size: 50px;">想联系我？</h1>
      <h1 v-show="store.state.Origin == 'PC'" style="font-size: 50px;">按住Ctrl将会在新页面打开</h1>
      <!-- <h2>点击下方图标</h2> -->
      <!-- <h1 v-show="store.state.Origin=='PE'" style="font-size: 60px;">点击</h1> -->
    </div>
    <div>
      <div class="LinkIcon">
        <a href="mailto:885054824@qq.com"><img src="@/assets/img/qq.svg" alt="" srcset=""></a>
        <a href="https://github.com/blue250"><img src="@/assets/img/github.svg" alt="" srcset=""></a>
      </div>
      <div style="display: flex;
    justify-content: center;
      ">
        <div style="text-align: center;">
          <h1 class="WhiteB">或扫描微信二维码</h1>
          <h3>请备注来意</h3>
          <div>
            <img src="@/assets/img/qrcode.png" style="width: 300px;" alt="" srcset="">
          </div>
        </div>
      </div>

    </div>


    <!-- <div style="height: 100%;position: relative;">
      <video src="video/findmeleg.mp4" autoplay muted loop class="video"></video>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
let xy = reactive([300, 600])
const backgroundPosition = () => {
  let a = { backgroundPosition: `${xy[0]}px ${xy[1]}px`, 'height': 'calc(' + store.getters.HomeHeight + ')' }
  return a
}
onMounted(() => {

})
</script>

<style lang="less">
#linkme {
  padding: 0 20px;
  background: url('@/assets/img/repeat.png');
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
// }
</style>