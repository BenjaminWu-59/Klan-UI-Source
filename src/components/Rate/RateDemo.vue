<template>
<h1>Rate示例</h1>
  <Demo :components="Rate1Demo">
    <template v-slot:BigIntro>
      用于评分的组件。
    </template>
    <template v-slot:intro>
      点击星星即可使其亮起来。
    </template>
  </Demo>
  <Demo :components="Rate2Demo">
    <template v-slot:intro>
      星星亮起来的同时伴有依据级别而产生的评语。
    </template>
  </Demo>

  <attr :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Rate1Demo from './Rate1Demo.vue';
import Rate2Demo from './Rate2Demo.vue';
import attr from '../Attributes.vue'
export default {
  components:{
    Demo,
    attr
  },
  setup(){
    const data =[
      {  params: 'texts',
        desc: '添加评语',
        type: 'string',
        select: '自行设置',
        default: '----',},
    ]

    return{
      Rate1Demo,
      Rate2Demo,
      data
    }
  }
};
</script>
