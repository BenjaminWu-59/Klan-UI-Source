<demo>
支持normal
</demo>
<template>
  <Button  @click="NormalClick">normal提示</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message/Message.js'
export default {
  name: 'Message1demo',
  components:{Button},
  setup(){
    const NormalClick = () =>{
      Message.info('this is a message')
    }
    return{NormalClick}
  }
};
</script>
