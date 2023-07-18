<template>
  <div  :style="{'height':'calc('+store.getters.HomeHeight+')'}" id="linkme">1</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store =useStore()
</script>

<style>

</style>