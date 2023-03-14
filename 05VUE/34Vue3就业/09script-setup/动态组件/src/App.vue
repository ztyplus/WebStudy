<template>
  <component :is="n < 0.5 ? Foo : Bar"></component>
</template>

<script setup>
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

const n = Math.random();
</script>

<!-- <script>
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
export default {
  components: {
    Foo,
    Bar,
  },
  setup() {
    const n = Math.random();
    return {
      n,
    };
  },
};
</script> -->
