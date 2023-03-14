<template>
  <button @click="increase">{{ count }}</button>
  <HelloWorld></HelloWorld>
</template>

<!-- <script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
    };
  },
};
</script> -->

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const count = ref(0);
defineExpose();
// const increase = () => {
//   count.value++;
// };
function increase() {
  count.value++;
}
</script>
