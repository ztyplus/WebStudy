import { ref, h } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
  created() {
    console.log(this);
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
  render() {
    return [
      h(
        'button',
        {
          onClick: this.increase,
        },
        this.count
      ),
      h(this.$options.components['HelloWorld']),
    ];
  },
};
