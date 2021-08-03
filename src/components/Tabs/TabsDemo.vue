<template>
  <h1>Tabs示例</h1>
  <Demo :components="Tabs1demo">
    <template v-slot:BigIntro>
      一个进行选项切换的组件
    </template>
    <template v-slot:intro>
      默认选中第一项。点击即可切换选项，同时内容也会随之变化。
    </template>
  </Demo>
  <Demo :components="Tabs2demo">
    <template v-slot:intro>
      在相应的选项上添加该属性会使其禁用。
    </template>
  </Demo>

  <attr :data="data"/>
</template>

<script lang="ts">
import Tabs1demo from './Tabs1demo.vue';
import Tabs2demo from './Tabs2demo.vue';
import Demo from '../Demo.vue';
import attr from '../Attributes.vue'
export default {
  components:{
   Demo,
    attr
  },
  setup(){
    const data = [
      { params: 'selected',
        desc: '默认选中',
        type: 'string',
        select: 'title',
        default: '----'},
      { params: 'disabled',
        desc: '禁用选中',
        type: 'string',
        select: 'title',
        default: '----',}
    ]
    return{
      Tabs1demo,
      Tabs2demo,
      data
    }
  }
};
</script>

<style lang="scss" scoped>

</style>