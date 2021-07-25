<template>
<h1>Message示例</h1>
  <Button size="big" @click="onClick">提示</Button>
  <Button size="big" @click="onClick2">提示2</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Message from '../lib/Message/Message.js'
export default {
  name: 'MessageDemo',
  components:{Button},
  setup(){
      const onClick = () =>{
        Message.info('this is a message')
      }
      const onClick2 =()=>{
        Message.success('this is a message')
      }
      return{onClick,onClick2}
  }
};
</script>

<style lang="scss" scoped>

</style>