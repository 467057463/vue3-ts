<template lang="pug">
.home
  HelloWorld(
    :msg="1"
  )
  el-button(
    @click="test"
  ) 通知
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import logo from '@/assets/logo.png';
function test(){
  Notification.requestPermission()
  // const n = new Notification('title', {
  //   icon: logo,
  //   body: 'test'
  // })
  // n.onclick = () => {
  //   console.log('click')
  // }
}
</script>

<style lang="scss">
.home{
  width: 100px;
  height: 100px;
  background: v-bind(color);
  margin: 0 auto;
  position: relative;
}
</style>