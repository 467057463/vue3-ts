<template lang="pug">
webview#webview(
  src="https://www.baidu.com/"
  :preload="preloadPath"
)
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import path from 'path';
// console.log(path.join(process.cwd(), "dist_electron", "view.js"))
let preload;
if(process.env.NODE_ENV){
  preload = `file:${path.join(process.cwd(), "dist_electron", "view.js")}`;
}else{
  preload = `file:${path.join(__dirname, "view.js")}`
}
const preloadPath = ref(preload)

onMounted(() => {
  console.log('onMouted')
  const webview = document.querySelector('webview')
  webview.addEventListener('dom-ready', () => {
    webview.openDevTools()
  })
})

</script>

<style lang="scss" scoped>
#foo{
  width: 100vw;
  height: 100vh;
}
</style>