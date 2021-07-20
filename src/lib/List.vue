<template>
  <div class="container" :class="classes" @scroll="onScroll">
    <div class="panel"
         ref="panel"
         :style="{
        paddingTop: paddingTop + 'px',
      }">
      <div class="item" v-for="item in visibleList" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed, onMounted} from "vue";

export default {
  props: {
    data: Array,
    load: {
      type: String
    }
  },
  setup(props) {
    let {data, load} = props
    let panel = ref(null);
    let count = 10; //用户可视范围内的item
    let start = ref(0);
    let end = ref(10);
    let itemHeight = 30;//每个元素的高度为30
    let paddingTop = ref(0);
    let totalHeight = data.length * itemHeight;
    let paddingBottom = ref((data.length - count) * itemHeight);

    let visibleList = computed(() => data.slice(start.value, end.value));
    onMounted(() => {
      panel.value.style.height = totalHeight + "px";
    });
    const onScroll = function (e) {
      start.value = Math.floor(e.target.scrollTop / itemHeight);//起始item
      end.value = start.value + count;//结束item：即起始item加上接下去显示的item
      paddingTop.value = start.value * itemHeight;

    };

    //设置不同css
    const classes = computed(() => {
      return {
        [`kanlan-load-${load}`]: load,
      }
    })

    return {
      visibleList,
      paddingTop,
      paddingBottom,
      panel,
      onScroll,
      classes
    };
  },
};
</script>

<style lang="scss">
$color: #aecde5;
$color2: #db9696;
.container {
  padding: 4px;
  height: 300px;
  overflow: auto;

  &.kanlan-load-loading {
    .item {
      background: $color2;
      color: darken($color2, 20%);
    }
  }

  .item {
    background: $color;
    color: darken($color, 30%);
    line-height: 30px;
    margin: 10px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>
