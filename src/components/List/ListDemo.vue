<template>
  <h1>List示例</h1>
  <Demo :components="List1demo"/>
</template>

<script lang="ts">
import List1demo from './List1demo.vue';
import List2demo from './List2demo.vue';
import Demo from '../Demo.vue';
export default {
  components:{
    Demo
  },
  setup(){
    return{
      List1demo,List2demo
    }
  }
};
</script>

<style lang="scss" scoped>

</style>