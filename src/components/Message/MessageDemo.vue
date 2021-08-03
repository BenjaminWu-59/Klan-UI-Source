<template>
  <h1>Message示例</h1>
  <Demo :components="Message1demo">
    <template v-slot:BigIntro>
      页面消息提示，用于展示操作时的信息反馈。
    </template>
    <template v-slot:intro>
      普通的信息提示。
    </template>
  </Demo>
  <Demo :components="Message2demo">
    <template v-slot:intro>
      成功的信息提示。
    </template>
  </Demo>
  <Demo :components="Message3demo">
    <template v-slot:intro>
      警告的信息提示。
    </template>
  </Demo>
  <Demo :components="Message4demo">
    <template v-slot:intro>
      危险的信息提示。
    </template>
  </Demo>

  <attr :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Message1demo from './Message1demo.vue';
import Message2demo from './Message2demo.vue';
import Message3demo from './Message3demo.vue';
import Message4demo from './Message4demo.vue';
import attr from '../Attributes.vue'

export default {
  name: 'MessageDemo',
  components: {Demo,attr},
  setup() {
    const data = [
      {params: 'Message',
        desc: '提示类型',
        type: 'object',
        select: 'info / success / warning / danger',
        default: 'info',}
    ]

    return {
      Message1demo,
      Message2demo,
      Message3demo,
      Message4demo,
      data
    };
  }
};
</script>

<style lang="scss" scoped>

</style>