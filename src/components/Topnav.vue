<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-gear"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <a href="https://github.com">
          <svg class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); //get，，获取xxx的值
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  color: #ffffff;
  background: #24292a;
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

    > svg {
      width: 25px;
      height: 25px;

      &:hover {
        animation: changeRight 1s linear infinite;
      }

      @-webkit-keyframes changeRight {

        0% {
          -webkit-transform: rotate(0deg);
        }

        50% {
          -webkit-transform: rotate(180deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
        }
      }
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
      margin: 0 0.8em;
    }
  }

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media(max-width: 500px) {
    > .menu {
      display: none
    }
    > .logo {
      margin: 0 auto
    }
    > .toggleAside {
      display: inline-block
    }
  }
  > a{
    display: inline-block;
  }
}
.icon{
  width: 25px;
  height: 25px;
}

</style>