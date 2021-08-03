<template>
<h1>Button示例</h1>
  <Demo :components="Button1demo">
    <template v-slot:BigIntro>
      按钮主要用于开始一个即时的操作。
    </template>
    <template v-slot:intro>
      五种常用的按钮。
    </template>
  </Demo>
  <Demo :components="Button2demo">
    <template v-slot:intro>
      分为大、中（默认）、小三种情况。属性值主要有big和little。
    </template>
  </Demo>
  <Demo :components="Button4demo">
    <template v-slot:intro>
      加上该属性后，按钮将被禁止使用
    </template>
  </Demo>
  <Demo :components="Button5demo">
    <template v-slot:intro>
      在按钮上面显示一个加载的状态。通常用于数据加载的过程。
    </template>
  </Demo>

  <attr :data="data"/>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Button1demo from './Button1demo.vue';
import Button2demo from './Button2demo.vue';
import Button4demo from './Button4demo.vue';
import Button5demo from './Button5demo.vue';
import Demo from '../Demo.vue';
import attr from '../Attributes.vue'

export default {
  name: 'ButtonDemo',
  components:{
    Button,
    Demo,
    attr
  },
  setup(){
    const data = [
      {params: 'theme',
        desc: '主题',
        type: 'string',
        select: 'primary / danger / link / text',
        default: '----'
      },
      {params: 'size',
        desc: '大小',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      },
      {params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: '----',
        default: 'true'
      },
      {params: 'loading',
        desc: '加载',
        type: 'string',
        select: '----',
        default: '----'
      },
    ]

    return{
      Button1demo,
      Button2demo,
      Button4demo,
      Button5demo,
      data
    }
  }
};
</script>

<style lang="scss" scoped>
.examples2{
  div{
    padding-top: 5px;
  }
}
</style>