<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :components="Switch1Demo"/>
    <Demo :components="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from '../Demo.vue';

export default {
  name: 'SwitchDemo',
  components: {Switch, Button, Demo},
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1Demo,
      Switch2Demo,
    };
  }
};
</script>

