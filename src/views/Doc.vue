<template>
  <div class="layout">
    <Topnav class="nav" :toggle-menu-button-visible="true"/>
    <div class="content">
      <transition name="slide">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 弹窗</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 导航</router-link>
            </li>
            <li>
              <router-link to="/doc/list">List &nbsp列表</router-link>
            </li>
            <li>
              <router-link to="/doc/slide">Carousel 轮播</router-link>
            </li>
            <li>
              <router-link to="/doc/message">Message 消息</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); //get 获取xxx的值
    return {menuVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    top: 0;
    left: 0;
    width: 100%;
  }

  > .content {
    flex-grow: 1;
    padding-top: 50px;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    right: 0;
    padding: 20px;
  }
}

aside {
  width: 200px;
  padding: 80px 0;
  background: #ffff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  box-shadow: 3px 0 3px#e2e0e0;

  > h2 {
    margin-bottom: 4px;
    padding:0 20px ;
  }

  > ol {
    > li {
      > a{
        display: block;
        padding:4px 24px;
        text-decoration: none;
      }
      .router-link-active{
        background:  rgba(200, 200, 200,0.8);
      }
    }
  }
}

main {
  overflow: auto;
}
</style>