<template>
<div class="topnav">
  <div class="logo">LOGO</div>
  <ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</div>
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
export default {
  name: 'Home.vue'
};
</script>

<style lang="scss" scoped>
.topnav {
  background: #313232;
  color: #d6d6d6;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 7px 1px #5a5959;
  > .logo {
    font-weight: bold;
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
