
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
  </div>
</template>


<style lang="less">
  .Home{
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
    font-variation-settings: 'wght' var(--wght),'BEVL' var(--BEVL);
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