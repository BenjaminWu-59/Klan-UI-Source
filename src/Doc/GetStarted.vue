<template>
  <div class="header">
    <h1>开始使用</h1>
  </div>

  <div class="main">
    <p>使用之前，一定要确定你是否已经<router-link class="link" to="/doc/install">安装</router-link>成功。</p>
    <p>接着就可以在相关文件引入了：</p>
    <pre  class="language-html" >import {Button, Message, Dialog} from "klan-ui"</pre>
  </div>

  <div class="header">
    <h2>单文件组件使用</h2>
  </div>

  <div class="main">
    <p>以 <strong>Button</strong> 的使用为例：</p>
    <pre class="language-javascript">{{ html }}</pre>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
export default {
  name: 'Intro',
  setup(){
    const html =` <template>
     <div>
       <Button>按钮</Button>
     </div>
 </template>

 <script>
  import {Button} from "klan-ui"
  export default {
  components: {Button}
  }
 < /script>`


    return{
      html
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  > h1 {
    font-weight: bold;
    border-bottom: 1px solid #d9d5d5;
  }
  > h2{
    font-weight: bold;
  }
}
.main{
  margin: 20px 0;
  max-width: 700px;
  >p{
    max-width: 644px;
    margin: 15px 0;
    line-height: 1.6em;
    letter-spacing:1.5px;
    >.link{
      color: #0d92ff;
    }
  }
}

pre{
  font-size: 15px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }
}
</style>