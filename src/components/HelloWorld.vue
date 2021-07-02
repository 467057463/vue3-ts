<template lang="pug">
el-button(@click="modalOpen = true") 打开

teleport(to="body")
  .modal(v-if="modalOpen")
    span 我是模态框

    el-button(@click="modalOpen = false") 关闭
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    msg: String
  },

  data(){
    return{
      modalOpen: false
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.modal{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: yellow;
}
</style>
