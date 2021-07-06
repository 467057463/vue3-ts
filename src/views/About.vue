<template lang="pug">
.about
  h1(
    @click="setCounter"
  ) This is an about page {{counter}}
  b {{msg}}
</template>

<script setup lang="ts">
import { counters } from '../composables/counters';
const { counter, setCounter } = counters();

const msg = 'test'
</script>