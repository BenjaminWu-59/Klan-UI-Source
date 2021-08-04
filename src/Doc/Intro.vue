<template>
  <div class="header">
    <h1>介绍</h1>
  </div>
  <div class="main">
   <p><strong>Klan UI</strong> 是一个基于<strong class="VT">Vue 3</strong> 和 <strong class="VT">TypeScript </strong> 的 <strong>UI</strong> 组件库。</p>
    <p>本库主要是作者为了熟悉<strong class="VT">Vue 3</strong> 和 <strong class="VT">TS</strong>而创建，因此强烈不建议你用于生产环境。但是，如果你是抱着学习造轮子或查看源代码的目的来的话，那么还是值得一看的。</p>
    <img src="../assets/coding/coding.gif" alt="">
  </div>
  <div class="foot">
    下一节：<router-link class="footLink" to="/doc/install">安装</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Intro'
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