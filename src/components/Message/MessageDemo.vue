<template>
  <h1>Message示例</h1>
  <Demo :components="Message1demo"/>
  <Demo :components="Message2demo"/>
  <Demo :components="Message3demo"/>
  <Demo :components="Message4demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Message1demo from './Message1demo.vue';
import Message2demo from './Message2demo.vue';
import Message3demo from './Message3demo.vue';
import Message4demo from './Message4demo.vue';

export default {
  name: 'MessageDemo',
  components: {Demo},
  setup() {
    const NormalClick = () => {
      Message.info('this is a message');
    };
    return {
      NormalClick,
      Message1demo,
      Message2demo,
      Message3demo,
      Message4demo
    };
  }
};
</script>

<style lang="scss" scoped>

</style>