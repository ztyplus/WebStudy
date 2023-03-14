<template>
  <div>
    <h1>App组件</h1>
    <Pager :total="total" :current="current" @pageChange="pageChange" />
  </div>
</template>

<script>
import Pager from "@/components/Pager"
export default {
  components: { Pager },
  data() {
    return {
      total: 3020,
      current: 12
    }
  },
  methods: {
    pageChange(page) {
      console.log('newPage: ', page);
      this.current = page;
      console.log("加载当前页数据");
    }
  }
};
</script>

<style scoped></style>
