<template>
  <div id="app">
    <h1>App组件</h1>
    <Avatar url="https://q.qlogo.cn/g?b=qq&nk=2251513837&s=640" :size="300" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"

export default {
  components: {
    Avatar
  }
}

</script>
