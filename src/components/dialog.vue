<template>
  <div style="width: 100vw;" class="dialog" v-show="props.show"  :style="store.getters.ScreenH">
    <div class="dialogBox">
      <div style="display: flex;justify-content: flex-end;margin-right: 20px;">
        <div class="closeButton" @click="close"></div>
      </div>
      <div style="height: calc(100% - 62px);overflow: auto;" class="box" @wheel.stop="" @touchend.stop="">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue';

import {useStore} from 'vuex'
const store= useStore()
const emit = defineEmits(['close'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const close=()=>{
  emit('close',false)
}
</script>

<style lang="less">
.closeButton {
  position: relative;
  width: 42px;
  height: 42px;
  cursor: pointer;

  &:hover {
    &::after {
      transform: rotate(-90deg);
    }

    &::before {
      transform: rotate(-90deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    transform-origin: center;
    top: 0;
    left: 12px;
    transform: rotate(-45deg);
    display: block;
    height: 42px;
    width: 8px;
    background-color: #4e5064;
    transition: all .25s ease-out;
    will-change: transform;
  }

  &::after {
    content: "";
    position: absolute;
    transform-origin: center;
    top: 0;
    left: 12px;
    transform: rotate(-135deg);
    display: block;
    height: 42px;
    width: 8px;
    background-color: #4e5064;
    transition: all .25s ease-out;
    will-change: transform;
  }
}

.dialog {

  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(6, 6, 6, 0.1);

  .dialogBox {
    .box{
      &::-webkit-scrollbar{
    width: 10px;
  }
  &::-webkit-scrollbar-thumb{
    width: 10px;
    border-radius: inherit;
    background-color: rgba(0,0,0,0.2);;
  }
    }

    padding-top: 20px;
    width: 70%;
    height: 70%;
    overflow: auto;
    background: #fff;
    border-radius: 20px;
  }
}</style>