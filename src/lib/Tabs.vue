<template>
  <div>
    <div class="kanlan-tabs">
      <div class="kanlan-tabs-nav">
        <div class="kanlan-tabs-nav-item" v-for="(t,index) in titles"
             :class="{selected: t === selected}"
             @click="select(t)"
             :key="index">{{ t }}</div>
      </div>
      <div class="kanlan-tabs-content">
        <component class="kanlan-tabs-content-item"
                   :class="{selected: c.props.title === selected}"
                   v-for="c in defaults" :is="c"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();//镶嵌于Tabs中的子标签
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });//这一步使得Tabs子标签只能是Tab
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });//所有的title都在这里了
   const select = (title:string)=>{
      context.emit('update:selected',title)
   }

    return {defaults, titles,select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.kanlan-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      display:none ;
      &.selected{
        display: block;
      }
    }
  }
}

</style>