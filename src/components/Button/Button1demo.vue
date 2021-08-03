<demo>
常规用法
</demo>
<template>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文字按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  name: 'Button1demo',
  components:{
    Button
  }
};
</script>
