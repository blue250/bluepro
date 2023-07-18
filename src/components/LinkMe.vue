<template>
  <div id="linkme" :style="backgroundPosition()">
    <div>
      <h1 style="font-size: 50px;">想联系我？</h1>
      <h1 v-show="store.state.Origin == 'PC'" style="font-size: 50px;">按住Ctrl将会在新页面打开</h1>
      <h2>点击下方图标</h2>
      <!-- <h1 v-show="store.state.Origin=='PE'" style="font-size: 60px;">点击</h1> -->
    </div>
    <div>
      <div class="LinkIcon">
        <a href="mailto:885054824@qq.com"><img src="img/qq.svg" alt="" srcset=""></a>
        <a href="https://github.com/blue250"><img src="img/github.svg" alt="" srcset=""></a>
      </div>
      <div style="display: flex;">
        <div style="text-align: center;">
          <h1 class="WhiteB">或扫描微信二维码</h1>
          <h3>请备注来意</h3>
          <div>
            <img src="img/qrcode.png" style="width: 300px;" alt="" srcset="">
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

  // setInterval(() => {
  //   console.log(1,'1');
    
  //   let timer1;
  //   let timer2;
  //   clearInterval(timer2)
  //   clearInterval(timer1)
  //   if (xy[0] >= 400) {
  //     clearInterval(timer2)
  //     timer1 = setInterval(() => {
  //       xy[0] -= 10
  //       xy[1] -= 10
  //       console.log(xy[0], 'xy');
  //     },100)
  //     return
  //   }
  //   if (xy[0] <= 100) {
  //     clearInterval(timer1)
  //     timer2 = setInterval(() => {
  //       xy[0] += 10
  //       xy[1] += 10
  //       console.log(xy[0], 'xy');
  //     },100)
  //     return
  //   }

  //   // document.getElementById('linkme').style.backgroundPosition=`${xy[0]}px ${xy[1]}px`
  // }, 1000)
  // console.log(, '11');

})
</script>

<style lang="less">
#linkme {
  padding: 0 20px;
  background: url('img/repeat.jpg');
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  // text-align: center;
  overflow: hidden;
  transition: all 0.3s;
  // background-position: 50% 50%;

  &::before {

    content: '';
    // background-size: cover;
    background-image: url(img/font.jpg);
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