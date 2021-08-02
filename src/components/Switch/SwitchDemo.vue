<template>
  <div>
    <h1>Switch 开关 </h1>
    <Demo :components="Switch1Demo">
      <template v-slot:BigIntro>
        表示两种相互对立的状态间的切换，多用于触发开关等。
      </template>
      <template v-slot:intro>
        用于一般情况。
      </template>
    </Demo>
    <Demo :components="Switch2Demo">
      <template v-slot:intro>
        该属性使得开关无法点击。于标签中加入 disabled 即可使用。
      </template>
      </Demo>
  </div>

  <attr :columns="columns" :data="data"></attr>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue';
import Button from '../../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from '../Demo.vue';
import attr from '../Attributes.vue'

export default {
  name: 'SwitchDemo',
  components: {Switch, Button, Demo,attr},
  setup() {
    const data = [
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]

    return {
      Switch1Demo,
      Switch2Demo,
      data
    };
  }
};
</script>

