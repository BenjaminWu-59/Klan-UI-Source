<demo>
一句话打开Dialog
</demo>

<template>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue'
import {openDialog} from '../../lib/openDialog';
export default {
  components:{
    Dialog,
    Button
  },
  setup(){
    const showDialog = ()=>{
      openDialog({
        title:'标题',
        content:'你好',
        ok(){
          console.log('ok'); //确认触发
        },
        cancel(){
          console.log('cancel'); //取消触发
        }
      })
    }
    return{
     showDialog
    }
  }
};
</script>

<style lang="scss" scoped>

</style>