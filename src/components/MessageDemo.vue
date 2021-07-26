<template>
<h1>Message示例</h1>
  <Demo :components="Message1demo"/>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Message from '../lib/Message/Message.js'
import Demo from './Demo.vue';
import Message1demo from './Message1demo.vue';
export default {
  name: 'MessageDemo',
  components:{Message1demo, Button,Demo},
  setup(){
      const NormalClick = () =>{
        Message.info('this is a message')
      }
    return{NormalClick,Message1demo}
  }
};
</script>

<style lang="scss" scoped>

</style>