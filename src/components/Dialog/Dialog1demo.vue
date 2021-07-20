<demo>
支持自定义title和content
</demo>

<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="true" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>加粗的标题
      </strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>h2</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue'
import {ref} from 'vue';
export default {
  components:{
    Dialog,
    Button
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const ok = ()=>{
      //自行添加点击ok干点啥
      return false
    }
    const cancel = ()=>{
      //自行添加点击cancel干点啥
    }
    return{
      x,toggle,ok,cancel
    }
  }
};
</script>