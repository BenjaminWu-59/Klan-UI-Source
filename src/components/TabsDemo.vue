<template>
  <h1>Tabs示例</h1>
  <Demo :components="Tabs1demo"/>
  <Demo :components="Tabs2demo"/>
</template>

<script lang="ts">
import Tabs1demo from './Tabs1demo.vue';
import Tabs2demo from './Tabs2demo.vue';
import Demo from './Demo.vue';
export default {
  components:{
   Demo
  },
  setup(){
    return{
      Tabs1demo,
      Tabs2demo
    }
  }
};
</script>

<style lang="scss" scoped>

</style>