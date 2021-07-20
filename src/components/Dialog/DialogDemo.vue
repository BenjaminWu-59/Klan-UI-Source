<template>
<h1>DialogDemo示例</h1>
  <Demo :components="Dialog1demo"/>
  <Demo :components="Dialog2demo"/>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue'
import {ref} from 'vue';
import {openDialog} from '../../lib/openDialog';
import Dialog1demo from './Dialog1demo.vue';
import Dialog2demo from './Dialog2demo.vue';
import Demo from '../Demo.vue';

export default {
  components:{
    Dialog2demo,
    Dialog,
    Button,
    Dialog1demo,
    Demo
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = ()=>{
      return false
    }
    const f2 = ()=>{}
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
      x,toggle,f1,f2,showDialog,Dialog1demo,Dialog2demo
    }
  }
};
</script>
