<template lang="pug">
.home
  HelloWorld
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from 'vue'

interface Book {
  title: string,
  author: string,
  year: number
}

export default defineComponent({
  name: 'home',

  components: {
    HelloWorld
  },

  data(){
    return {
      message: '1111',
      book: {
        title: 'ss',
        author: 'ss',
        year: 200
      } as Book
    }
  },

  computed: {
    greeting(): string{
      return this.message + '1'
    },

    greetingUppercase: {
      get(): string{
        return this.message + 2;
      },

      set(val){
        this.message = val;
      }
    }
  },

  mounted(){
    const result = this.message.split("")
    const s = this.book.title + this.greetingUppercase.charAt(0);
  }
})
</script>

<style lang="scss">
.home{
  width: 100px;
  height: 100px;
  background: red;
  margin: 0 auto;
  position: relative;
}
</style>