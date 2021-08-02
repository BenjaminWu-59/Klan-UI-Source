<template>
  <div class="header">
    <span><slot class="slot" name="BigIntro"/></span>
    <h2>
      <svg class="icon" :class="{move:codeButton === false}">
        <use xlink:href="#icon-at"></use>
      </svg>
      {{ components.__sourceCodeTitle }}
    </h2>
    <span><slot class="slot" name="intro"></slot></span>
  </div>

  <div class="demo">
    <div class="demo-component">
      <component :is="components"/>
    </div>

    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden ']">
      <pre class="language-html" v-html="html"/>
    </div>

    <div class="demo-actions" @click="toggleCode" @mouseover="enter" @mouseleave="leave">
      <div class="hidden"  v-if="codeVisible">
        <svg class="icon" :class="{move:codeButton === false}">
          <use xlink:href="#icon-sanjiao"></use>
        </svg>
        <transition name="codeButtonSlide">
          <div class="p" v-if="codeButton">隐藏代码</div>
        </transition>
      </div>

      <div class="view" v-else>
        <svg class="icon" :class="{move:codeButton === false}">
          <use xlink:href="#icon-daosanjiao"></use>
        </svg>
        <transition name="codeButtonSlide">
          <div class="p" v-if="codeButton">查看代码</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;
export default {
  props: {
    components: Object
  },
  components: {Button},
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.components.__sourceCode, Prism.languages.html, 'html');
    });

    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;

    };
    const codeVisible = ref(false);
    const codeButton = ref(false);

    const enter = () => {
      codeButton.value = true;
    };
    const leave = () => {
      codeButton.value = false;
    };


    return {
      Prism,
      html,
      codeVisible,
      codeButton,
      toggleCode,
      enter,
      leave
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #e0e0e0;
$svg: #b3b3b3;
$svgBg: #2893cb;

.header{
  margin-top: 5px;
  >h2{
    padding: 50px 0 8px;
    display: flex;
    align-items: center;

    >svg{
      height: 15px;
      width: 15px;
      margin-right: 4px;
    }
  }
  >span{
    color: #707070;
  }
}


.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  max-width: 650px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-top: 1px solid $border-color;
    cursor: pointer;

    > .view,
    .hidden{
      height: 22px;
      width: 86px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > svg {
        left: 0;
        position: absolute;
        color: $svg;
        transition: all 0.4s ease 0s;
        &.move{
          left: 40px;
          transition: all 0.4s ease 0s;
        }
      }
      .p {
        right: 0;
        position: absolute;
        white-space:nowrap;
        font-size: 15px;
        padding-left: 10px;
        color:$svg ;
      }
    }

    &:hover {
      background: rgba(249, 250, 252);

      > .view,
      .hidden{
        > svg {
          color: $svgBg;
        }
        .p{
          color: $svgBg;
        }
      }
    }
  }

  &-code {
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      padding: 24px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .code-hidden {
    transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
    max-height: 0;
    border: none;
  }

  .code-show {
    max-height: 800px;
    transition: all 1s cubic-bezier(0.39, 0.7, 0.18, 0.9);
  }
}

.demo:hover {
  box-shadow: 0 0 10px 0 rgb(232 237 250 / 80%),
  0 5px 7px 0 rgb(232 237 250 / 60%);
}
</style>