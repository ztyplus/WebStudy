<template>
  <div class="page-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in numbers" :key="i" :class="{ active: n === current }">{{ n }}</a>
    <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },

    // 得到显示的最小数字
    visiableMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1
      }
      return min;
    },

    // 得到显示的最大数字
    visiableMax() {
      let max = this.visiableMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber
      }
      return max;
    },

    numbers() {
      let nums = []
      for (let i = this.visiableMin; i < this.visiableMax; i++) {
        nums.push(i)
      }
      return nums;
    }
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber
      }
      if (newPage === this.current) {
        return
      }
      this.$emit('pageChange', newPage)
    }
  }
}
</script>

<style lang="less" scope>
@import "~@/styles/var.less";

.page-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @success;
    }
  }
}
</style>