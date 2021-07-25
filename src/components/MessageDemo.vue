<template>
<h1>Message示例</h1>
  <Button  @click="NormalClick">普通提示</Button>
  <br />
  <br />
  <Button  @click="SuccessClick">成功提示</Button>
  <br />
  <br />
  <Button  @click="WarningClick">警告提示</Button>
  <br />
  <br />
  <Button  @click="DangerClick">危险提示</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Message from '../lib/Message/Message.js'
export default {
  name: 'MessageDemo',
  components:{Button},
  setup(){
      const NormalClick = () =>{
        Message.info('this is a message')
      }
      const SuccessClick =()=>{
        Message.success('this is a message')
      }
      const WarningClick = ()=>{
        Message.warning('this is a message')
      }
      const DangerClick = ()=>{
      Message.danger('this is a message')
    }

      return{NormalClick,SuccessClick,WarningClick,DangerClick}
  }
};
</script>

<style lang="scss" scoped>

</style>