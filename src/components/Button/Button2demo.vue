<demo>
支持size
</demo>

<template>
  <div>
    <Button size="big">较大按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">较小按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  name: 'Button2demo',
  components:{
    Button
  }
};
</script>
