<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div class="dot-item"
         v-for="item in itemLen"
         :key="item">
      <a
         class="dot-lk"
         :style="{backgroundColor:(item-1) === currentIndex ? dotBgColor : '#fff'}"
         @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CarDot',
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true
    },//是否有圆点
    dotBgColor: {
      type: String,
      default: '#ff5000'
    }
  },
  setup(props,ctx) {
    const dotClick = (index) => {
      //@ts-ignore
      ctx.emit('dotClick',index)
    };

    return{
      dotClick
    }
  }
};
</script>

<style lang="scss" scoped>
.dot-wrapper{
  width:70px;
  height: 13px;
  border-radius: 10px;
  position:absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index:1;
  margin-left: -39px;

  .dot-item{
    display: inline-block;
    margin:3px;

    .dot-lk{
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>