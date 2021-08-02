<template>
  <div class="demo">
    <h2>{{components.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="components"/>
    </div>

    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden ']">
      <pre class="language-html" v-html="html" />
    </div>

    <div class="demo-actions">
      <div @click="toggleCode" v-if="codeVisible">隐藏代码</div>
      <div @click="toggleCode" v-else>查看代码</div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import  'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import {computed, ref} from 'vue';
const Prism = (window as any).Prism
export default {
  props:{
    components:Object
  },
  components:{Button},
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.components.__sourceCode, Prism.languages.html, 'html')
    })

    const toggleCode = () => {codeVisible.value = !codeVisible.value};
    const codeVisible = ref(false);

    return{
      Prism,
      html,
      codeVisible,
      toggleCode
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #e0e0e0;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  max-width: 650px;
  >h2 {
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
    padding: 8px 16px;
    border-top: 1px solid $border-color;
    cursor: pointer;
    &:hover{
      background: rgba(249, 250, 252)
    }
  }

  &-code {
    overflow: auto;
    &::-webkit-scrollbar{
      width: 0;
    }
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      padding: 24px;
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
.demo:hover{
  box-shadow: 0 0 10px 0 rgb(232 237 250 / 80%),
  0 5px 7px 0 rgb(232 237 250 / 60%);
}
</style>