<template>
  <div class="header">
    <h1>安装</h1>
  </div>

  <div class="main">
    <p>你需要打开终端，运行以下命令：</p>
    <pre  class="language-html" >yarn add klan-ui</pre>
    <p>或者：</p>
    <pre  class="language-html" >npm install klan-ui</pre>
  </div>

  <div class="foot">
    下一节：<router-link class="footLink" to="/doc/get-started">开始使用</router-link>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
.header {
  > h1 {
    font-weight: bold;
    border-bottom: 1px solid #d9d5d5;
  }
}
.main{
  margin: 20px 0;
  max-width: 700px;
  >.code{

  }
  >p{
    max-width: 644px;
    margin: 15px 0;
    line-height: 1.6em;
    letter-spacing:1.5px;
    >.VT{
      margin: 5px;
      padding:2px 4px;
      background: #1d1d1d;
      color: #f1eeee;
      border-radius: 3px;
    }
  }
}
.foot{
  >.footLink{
    color: #0685ea;
  }
}
</style>