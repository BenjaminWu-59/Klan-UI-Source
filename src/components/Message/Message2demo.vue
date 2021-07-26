<demo>
支持success
</demo>
<template>
  <Button  @click="SuccessClick">success提示</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message/Message.js'
export default {
  name: 'Message1demo',
  components:{Button},
  setup(){
    const SuccessClick = () =>{
      Message.success('this is a message')
    }
    return{SuccessClick}
  }
};
</script>