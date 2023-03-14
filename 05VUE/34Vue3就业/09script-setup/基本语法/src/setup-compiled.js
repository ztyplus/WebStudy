import { ref, h } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
export default {
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };
    return () => [
      h(
        'button',
        {
          onClick: increase,
        },
        count.value
      ),
      h(HelloWorld),
    ];
  },
};
