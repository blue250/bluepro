<script setup lang="ts">
import { ref  } from 'vue'
import { useStore } from 'vuex'
import { SrcollToA } from '../util/common'
const store = useStore()
// 点击切换active与定位
const ClickId = (a: string, index: number) => {
  if (!store.state.FrezzActive) {
    store.commit('FrezzActive', true)
    store.commit('ScrollPage', index)
    SrcollToA(a)
  }

  // 点击冻结 activeclass  防止滚动过程中  activeclass乱跑
  // store.commit('FrezzActive',true)

}

const IsActive = (id: string) => {
  return id == store.state.DomId
}
let ShowMenuC = ref(false)
const ShowMenu = () => {
  ShowMenuC.value = true
}
const CloseMenu = () => {
  ShowMenuC.value = false
}
defineExpose({CloseMenu})
</script>

<template>
  <div class="Banner">
    <div style="font-size: 1.5em;display: flex;">
      <div><img src="@/assets/ico.png" alt="" srcset=""></div>
      <span style="color: #6cf;">blue</span>250
    </div>
    <ul class="linkB">
      <li class="home" :class="{ active: IsActive('home') }" @click="ClickId('home', 0)">首页</li>
      <li class="about" :class="{ active: IsActive('about') }" @click="ClickId('about', 1)">关于</li>
      <li class="pro" :class="{ active: IsActive('pro') }" @click="ClickId('pro', 2)">项目</li>
      <li class="linkme" :class="{ active: IsActive('linkme') }" @click="ClickId('linkme', 3)">找我</li>
    </ul>
    <div class="linkSmall" @click.stop="">
      <img src="@/assets/img/menu.png" alt="" srcset="" style="height: 100%;" @click="ShowMenu" v-show="!ShowMenuC">
      <div class="closeButton" style="height: 100%;" @click="CloseMenu" v-show="ShowMenuC"></div>
      <div style="position: absolute;top: 100%;left:0;display: block;width: 100vw;" v-show="ShowMenuC">
        <ul class="linkS">
          <li class="home" :class="{ active: IsActive('home') }" @click="ClickId('home', 0)">首页</li>
          <li class="about" :class="{ active: IsActive('about') }" @click="ClickId('about', 1)">关于</li>
          <li class="pro" :class="{ active: IsActive('pro') }" @click="ClickId('pro', 2)">项目</li>
          <li class="linkme" :class="{ active: IsActive('linkme') }" @click="ClickId('linkme', 3)">找我</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style lang="less">
.Banner {
  z-index: 2;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px #0000001a;
  background: white;
  width: 100%;
  display: flex;
  padding: var(--base-padding);
  justify-content: space-between;

  .linkSmall {
    display: none;
    height: 1.5em;
    .linkS{
      background: #fff;
      box-shadow: 0 4px 8px #0000001a;
      li {
        font-size: 1.2em;
      transition: all .3s;
      padding: 16px 20px;
      // border-radius: 10px;
      line-height: 1.5;

      &:hover {
        color: #6cf;
      }
    }

    .active {
      background: #333;
      color: white;
    }
    }
  }

  .linkB {
    cursor: pointer;
    display: flex;

    li {
      transition: all .3s;
      padding: 6px 20px;
      border-radius: 10px;
      line-height: 1.5;

      &:hover {
        color: #6cf;
      }
    }

    .active {
      background: #333;
      color: white;
    }
  }
}

@media screen and (max-width:768px) {
  .Banner {
    .linkB {
      display: none;
    }

    .linkSmall {
      display: block;
    }
  }
  .closeButton{
    width: 24px !important;
    &::before{
      height: 100% !important;
    }
    &::after{
      height: 100% !important;
    }
  }

}</style>