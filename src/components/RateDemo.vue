<template>
<h1>Rate示例</h1>
  <Demo :components="Rate1Demo"/>
  <Demo :components="Rate2Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Rate1Demo from './Rate1Demo.vue';
import Rate2Demo from './Rate2Demo.vue';
export default {
  components:{
    Demo
  },
  setup(){
    return{
      Rate1Demo,
      Rate2Demo
    }
  }
};
</script>
