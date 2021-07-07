<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue';

export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible') //get，，获取xxx的值
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: #fcfcfc;
  color: #0c0c0c;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 6px 1px #707070;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media(max-width: 500px){
    >.menu{display: none}
    >.logo{margin:0 auto}
    >.toggleAside{display: inline-block}
  }

}
</style>