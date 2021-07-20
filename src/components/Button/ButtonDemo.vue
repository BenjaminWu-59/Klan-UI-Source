<template>
<h1>Button示例</h1>
  <Demo :components="Button1demo"/>
  <Demo :components="Button2demo"/>
  <Demo :components="Button3demo"/>
  <Demo :components="Button4demo"/>
  <Demo :components="Button5demo"/>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Button1demo from './Button1demo.vue';
import Button2demo from './Button2demo.vue';
import Button3demo from './Button3demo.vue';
import Button4demo from './Button4demo.vue';
import Button5demo from './Button5demo.vue';
import Demo from '../Demo.vue';

export default {
  name: 'ButtonDemo',
  components:{
    Button,
    Demo
  },
  setup(){
    return{
      Button1demo,
      Button2demo,
      Button3demo,
      Button4demo,
      Button5demo
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