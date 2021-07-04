<template lang="pug">
span {{counter}}
el-button(
  @click="setCounter"
) test {{msg}}

el-button(@click="modalOpen = true") 打开

teleport(to="body")
  .modal(v-if="modalOpen")
    span 我是模态框

    el-button(@click="modalOpen = false") 关闭
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, toRefs, watch } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props, context){
    console.log(props)
    const { msg } = toRefs(props)
    const counter = ref(0);
    const setCounter = function(){
      counter.value++
    }

    onMounted(() => {
      console.log('onMouted', props)
    })
    
    watch(counter, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    watch(msg, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    const twiceCounter = computed(() => counter.value * 2)

    return{
      twiceCounter,
      msg,
      counter,
      setCounter
    }
  },

  mounted(){
    console.log(this)
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
