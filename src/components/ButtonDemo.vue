<template>
<h1>Button示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>xxxxxxxxxxx</pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持size属性</h2>
    <div class="demo-component">
      <div>
        <Button size="big">大大大</Button>
        <Button>普普通通</Button>
        <Button size="small">小小小</Button>
      </div>
      <div>
        <Button theme="link" size="big">大大大</Button>
        <Button theme="link">普普通通</Button>
        <Button size="small" theme="link">小小小</Button>
      </div>
      <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普普通通</Button>
        <Button size="small" theme="text">小小小</Button>
      </div>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>xxxxxxxxxxx</pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持level属性</h2>
    <div class="demo-component">
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
      </div>
      <div>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
      </div>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>xxxxxxxxxxx</pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持disabled属性</h2>
    <div class="demo-component">
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>xxxxxxxxxxx</pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持加载样式</h2>
    <div class="demo-component">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>xxxxxxxxxxx</pre>
    </div>
  </div>


</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  name: 'ButtonDemo',
  components:{Button},
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