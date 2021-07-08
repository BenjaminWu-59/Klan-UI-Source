<template>
<button @click="toggle" :class="{checked:value}">
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

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
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
  &.checked {
    background: rgba(0, 196, 255, 0.91);
    > span{
      left: calc(100% - #{$h});}
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}



</style>