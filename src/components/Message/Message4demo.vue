<demo>
支持danger
</demo>
<template>
  <Button  @click="DangerClick">danger提示</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message/Message.js'
export default {
  name: 'Message1demo',
  components:{Button},
  setup(){
    const DangerClick = () =>{
      Message.danger('this is a message')
    }
    return{DangerClick}
  }
};
</script>