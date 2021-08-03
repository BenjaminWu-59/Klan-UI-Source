<template>
  <h1>List示例</h1>
  <Demo :components="List1demo">
    <template v-slot:BigIntro>
      展示多条数据的组件。
    </template>
    <template v-slot:intro>
      这是一种对数据的优化展示，页面仅渲染看得到的数据，滚动条负责渲染数据的前后高度。
    </template>
  </Demo>

  <attr :data="data"></attr>
</template>

<script lang="ts">
import List1demo from './List1demo.vue';
import List2demo from './List2demo.vue';
import Demo from '../Demo.vue';
import attr from '../Attributes.vue'
export default {
  components:{
    Demo,
    attr
  },
  setup(){
    const data = [
      {params: 'data',
        desc: '展示数据类型',
        type: '----',
        select: '----',
        default: '----'}
    ]

    return{
      List1demo,
      List2demo,
      data
    }
  }
};
</script>

<style lang="scss" scoped>

</style>