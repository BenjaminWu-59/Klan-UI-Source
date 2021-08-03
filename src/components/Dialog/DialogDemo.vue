<template>
<h1>Dialog示例</h1>
  <Demo :components="Dialog1demo">
    <template v-slot:BigIntro>
     点击获取弹窗。
    </template>
    <template v-slot:intro>
      基础弹窗支持自定义标题和内容。
    </template>
  </Demo>
  <Demo :components="Dialog2demo">
    <template v-slot:intro>
      将Dom结构隐藏，转成函数调用。可以调用暴露出的 api 以进行操作。
    </template>
    </Demo>

  <attr :data="data" />
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue'
import Dialog1demo from './Dialog1demo.vue';
import Dialog2demo from './Dialog2demo.vue';
import Demo from '../Demo.vue';
import attr from '../Attributes.vue'

export default {
  components:{
    Dialog,
    Button,
    Demo,
    attr
  },
  setup(){
    const data =[
      {params: 'visible',
        desc: '是否弹出',
        type: 'boolean',
        select: 'true / false',
        default: 'false'},
      {params: 'ok()',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '----'},
      {params: 'cancel()',
        desc: '取消出发函数',
        type: 'function',
        select: '()=>{}',
        default: '----'}
    ]
    return{
     Dialog1demo,
      Dialog2demo,
      data
    }
  }
};
</script>
