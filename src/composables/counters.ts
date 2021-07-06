import { computed, defineComponent, onMounted, ref, toRefs, watch } from 'vue'

export const counters = function(){
  const counter = ref(0);
  const setCounter = function(){
    counter.value++
  }
  
  return {
    counter,
    setCounter
  }
}