<demo>
普通提示
</demo>
<template>
  <Button  @click="NormalClick">普通提示</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Message from '../lib/Message/Message.js'
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

<style lang="scss" scoped>

</style>