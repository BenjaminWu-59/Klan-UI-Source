<template>
<div>rate评分</div>
<div class="main">
  <div class="header">默认主题</div>
  <div class="content">
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</div>
</template>

<script lang="ts">

export default {

};
</script>

<style lang="scss" scoped>
$xxx: #e2c405;
.main{
  >.header{
    display: flex;
    justify-content: center;
    color: #707070;
  }
  >.content {
    > ol {
      display: flex;
      justify-content: center;

      > li {
        border: 1px solid black;
        margin: 3px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>