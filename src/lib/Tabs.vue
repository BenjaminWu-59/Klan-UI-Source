<template>
  <div>
    <div class="kanlan-tabs">
      <div class="kanlan-tabs-nav">
        <div class="kanlan-tabs-nav-item" v-for="(t,index) in titles"
             :ref="el => { if (el) navItems[index] = el }"
             :class="{selected: t === selected}"
             @click="select(t)"
             :key="index">{{ t }}</div>
        <div class="kanlan-tabs-nav-indicator" ref="indicator"></div>
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
import {onMounted, ref} from 'vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])//使用ref获取节点
    const indicator = ref<HTMLDivElement>(null)
    onMounted(()=>{
      const divs = navItems.value //所有的标签
      const result = divs.filter(div => div.classList.contains ('selected'))[0]
      console.log(result);
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
    })
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

    return {defaults, titles,select,navItems,indicator};
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
    position:relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
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