<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue';

export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible') //get，，获取xxx的值
    console.log(menuVisible.value);
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: #313232;
  color: #f6f7f8;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 6px 1px #707070;
  position: relative;
  z-index: 10;
  > .logo {
    font-weight: bold;
    max-width: 6em;
    margin-right: auto;
    &:hover {
      cursor: pointer;
    }
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