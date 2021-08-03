<template>
  <div>
    <div class="kanlan-tabs">
      <div class="kanlan-tabs-nav" ref="container">
        <div class="kanlan-tabs-nav-item" v-for="(tab,index) in tabs"
             :ref="el => { if (el) navItems[index] = el }"
             :class="{selected: tab.title === selected, disabled: tab.disabled}"
             @click="select(tab)"
             :key="index">{{ tab.title }}
        </div>
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
import {onMounted, onUpdated, ref} from 'vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])//使用ref获取节点
    const indicator = ref<HTMLDivElement>(null)//横线节点
    const container = ref<HTMLDivElement>(null)
    const x =() =>{
      const divs = navItems.value //所有的标签
      const result = divs.filter(div => div.classList.contains ('selected'))[0]//选中的标签
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left:left1} = container.value.getBoundingClientRect()
      const {left:left2} = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)

    const defaults = context.slots.default();//镶嵌于Tabs中的子标签
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });//这一步使得Tabs子标签只能是Tab
    const tabs = defaults.map((tag) => {
      return { title: tag.props.title, disabled: tag.props.disabled !== undefined };
    });//所有的title都在这里了,如果加上disabled，则disabled不等于undefined,就会出现
    console.log(tabs)
   const select = (tab: any)=>{
      if(tab.disabled) return;
      context.emit('update:selected',tab.title)
   }

    return {defaults, tabs,select,navItems,indicator,container};
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
      transition:all 250ms ;
    }

    .disabled {
      color: #999;
      cursor:not-allowed;
    }
  }
  &-content {
    padding: 10px 0;
    &-item{
      display:none ;
      &.selected{
        display: block;
      }
    }
  }
}

</style>