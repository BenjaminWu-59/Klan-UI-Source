<template>
  <button class="public-button" :class="classes" :disabled="disabled">
    <span v-if="loading"  class="kanlan-loadingIndicator"></span>
  <slot/>
</button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props:{
    theme:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default: 'normal',
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props){
    const {theme,size,level} = props
    const classes = computed(()=>{
      return {
        [`kanlan-theme-${theme}`]: theme,
        [`kanlan-size-${size}`]: size,
        [`kanlan-level-${level}`]:level,
      }
    })
    return {classes}
  }
};
</script>

<style lang="scss">
  $h: 37px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  $red: red;
  $grey:grey;
  .public-button {
    box-sizing: border-box;
    margin: 2px;
    height: $h;
    padding: 2px 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.kanlan-theme-primary{
      border-color: transparent;
      box-shadow: none;
      color:white;
      background: $blue;
      &:hover,&:focus{
        background: lighten($blue, 10%);
      }
    }
    &.kanlan-theme-danger{
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: lighten($red, 15%);
      }
    }
    &.kanlan-theme-link{
      background: white;
      border-color: #efecec;
      color: $blue;
      &:hover,
      &:focus {
        background: lighten($blue, 30%);
      }
    }
    &.kanlan-theme-text{
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }

      &.kanlan-size-big{
        font-size: 24px;
        height: 50px;
        padding: 0 16px;
      }
      &.kanlan-size-small{
        font-size: 12px;
        height: 25px;
        padding: 0 4px;
      }
    &.kanlan-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover {
          border-color: $grey;
        }
      }
    }
    &.kanlan-theme-link, &.kanlan-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }
    >.kanlan-loadingIndicator{
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: black black black transparent;
      border-style: solid;
      border-width: 2px;
      animation: kanlan-spin 1s infinite linear;
    }
  }
  @keyframes kanlan-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }


</style>