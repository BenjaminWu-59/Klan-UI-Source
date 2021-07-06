<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Topnav'
};
</script>

<style lang="scss" scoped>
.topnav {
  background: #313232;
  color: #f6f7f8;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 6px 1px #707070;
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