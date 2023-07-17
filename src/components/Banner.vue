<script setup lang="ts">
import {useStore} from 'vuex'
import {SrcollToA} from '../util/common'
const store=useStore()
// 点击切换active与定位
const ClickId=(a:string)=>{
  SrcollToA(a)
store.commit('DomId',a)
// 点击冻结 activeclass  防止滚动过程中  activeclass乱跑
store.commit('FrezzActive',true)
  
}

const IsActive=(id:string)=>{
  return id==store.state.DomId
}

</script>

<template>
  <div class="Banner">
    <div style="font-size: 1.5em;"><span style="color: #6cf;">blue</span>250</div>
    <ul class="link">
      <li class="home" :class="{active:IsActive('home')}" @click="ClickId('home')">首页</li>
      <li class="about" :class="{active:IsActive('about')}" @click="ClickId('about')">关于</li>
      <li class="pro" :class="{active:IsActive('pro')}" @click="ClickId('pro')">项目</li>
      <li class="link" :class="{active:IsActive('link')}" @click="ClickId('link')">找我</li>
    </ul>
  </div>
</template>



<style lang="less">
  .Banner{
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
    .link{
      cursor: pointer;
      display: flex;
      li{
        transition: all .3s;
        padding: 6px 20px;
        border-radius: 10px;
        line-height: 1.5;
        &:hover{
          color: #6cf;
        }
      }
      .active{
        background: #333;
        color: white;
      }
    }
  }
</style>