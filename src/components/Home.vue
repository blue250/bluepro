
<script lang="ts" setup>
import JsonImg from './JsonImg.vue'
import HomeText from './HomeText.vue'
  import {useStore} from 'vuex'
  const store=useStore()
  


</script>

<template>
  <div class="Home" id="home" :style="{'height':'calc('+store.getters.HomeHeight+')',marginTop:store.state.Header+'px'}">
    <HomeText class="HomeText"></HomeText>
    <JsonImg path="/img/markus2.json" class="JsonImg"></JsonImg>
    <div class="container">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
</div>
  </div>
</template>


<style lang="less">
.container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    width: 24px;
    height: 24px;
}
.chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
}
.chevron:first-child {
    animation: move 3s ease-out 1s infinite;
}
.chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
}
.chevron:before,
.chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #000;
}
.chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
}
.chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
}
@keyframes move {
    25% {
        opacity: 1;
    }
    33% {
        opacity: 1;
        transform: translateY(30px);
    }
    67% {
        opacity: 1;
        transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
}
.text {
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: .25;
    animation: pulse 2s linear alternate infinite;
}
@keyframes pulse {
    to {
        opacity: 1;
    }
}
  .Home{
    position: relative;
    padding: var(--base-padding);
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: content-box;
    background-image:url('/img/home.svg');
    display: flex;
    .HomeText{
      padding: 60px 0;
      line-height: 1.5;
      flex: 1;
      font-family: VF Thin, webfont-notdef; font-size: 50px;
      --wght: 564.66;
    --BEVL: 100;
    font-weight: 800;
    .Small{
      font-size: 24px;
    }
    }
    .JsonImg{
      width: 400px;
      min-width: 50%;
      overflow: hidden;
    }
  }
  @media screen and (max-width:992px){
  .Home{
    .HomeText{
      font-size: 28px;
      .Small{
      font-size: 18px;
    }
    }
  }
}
  @media screen and (max-width:768px){
  .Home{
    display: block;
    .HomeText{
      padding: 20px 0;
    }
    .JsonImg{
      width: auto;
    }
  }
}
</style>