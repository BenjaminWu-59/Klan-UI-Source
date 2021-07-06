<template>
 <Topnav/>
  <div class="banner">
    <h1>KanLan UI</h1>
    <h2>一个不错的个人UI框架</h2>
    <p class="actions">
      <a>Github</a>
      <a>开始</a>
    </p>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  name: 'Home.vue',
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
</style>
