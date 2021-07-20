<template>
<h1>Button示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Button1demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Button1demo.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>

  <div class="demo">
    <h2>支持size属性</h2>
    <div class="demo-component">
     <Button2demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Button2demo.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>

  <div class="demo">
    <h2>支持level属性</h2>
    <div class="demo-component">
     <Button3demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Button3demo.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>

  <div class="demo">
    <h2>支持disabled属性</h2>
    <div class="demo-component">
      <Button4demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Button4demo.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>

  <div class="demo">
    <h2>支持加载样式</h2>
    <div class="demo-component">
      <Button5demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Button5demo.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>


</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Button1demo from './Button1demo.vue';
import Button2demo from './Button2demo.vue';
import Button3demo from './Button3demo.vue';
import Button4demo from './Button4demo.vue';
import Button5demo from './Button5demo.vue';
import  'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

console.log(Button2demo.__sourceCode);

export default {
  name: 'ButtonDemo',
  components:{
    Button,
    Button1demo,
    Button2demo,
    Button3demo,
    Button4demo,
    Button5demo
  },
  setup(){
    return{
      Button1demo,
      Button2demo,
      Button3demo,
      Button4demo,
      Button5demo,
      Prism
    }
  }
};
</script>

<style lang="scss" scoped>
.examples2{
  div{
    padding-top: 5px;
  }
}
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 10px;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>