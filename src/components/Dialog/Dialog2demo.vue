<demo>
函数调用式弹窗
</demo>

<template>
  <Button @click="showDialog">一键开弹窗</Button>
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
