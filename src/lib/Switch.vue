<template>
<button class='kanlan-switch' @click="toggle" :class="{'kanlan-checked':value}">
  <span></span>
</button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('update:value',!props.value)
    }
    return {toggle}
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.kanlan-switch{
  height: $h;
  width: $h*2;
  border:none;
  background: #9f9f9f;
  border-radius: $h/2;
  position: relative;
  > span{
    position: absolute;
    top:2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 0.2s;
  }
  &.kanlan-checked {
    background: rgba(79, 155, 222, 0.91);
    > span{
      left: calc(100% - #{$h});}
  }

  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.kanlan-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
.kanlan-switch:after{
  content: "";
  display: block;
  position: absolute;
  //扩大伪类元素4个方向各5px
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  //使其圆润
  border-radius: 12px;
  pointer-events: none;
  background-color: #333;
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: 0;
  transition: all .3s;
}
.kanlan-switch:active:after {
  opacity: .3;
  //设置初始状态
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0s;
}


</style>