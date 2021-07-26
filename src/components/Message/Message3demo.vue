<demo>
支持warning
</demo>
<template>
  <Button  @click="WarningClick">warning提示</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message/Message.js'
export default {
  name: 'Message1demo',
  components:{Button},
  setup(){
    const WarningClick = () =>{
      Message.warning('this is a message')
    }
    return{WarningClick}
  }
};
</script>