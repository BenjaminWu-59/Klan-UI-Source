<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ningmeng"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/">文档</router-link>
      </li>
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
$color: #007974;
.topnav {
  color:$color;
  background: #ffff;
  display: flex;
  padding: 16px;
  box-shadow: 0 0 5px 2px #e2e0e0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    font-weight: bold;
    max-width: 6em;
    margin-right: auto;
    > svg{
      width: 30px;
      height: 30px;
    }
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