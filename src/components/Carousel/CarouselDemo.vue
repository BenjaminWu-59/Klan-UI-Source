<template>
  <h1>Carousel示例</h1>
  <Demo :components="Carousel1Demo">
    <template v-slot:BigIntro>
      类似于旋转木马，可以轮播一组区域.
    </template>
    <template v-slot:intro>
     自动轮播，可以自行设置是否轮播、轮播持续时间、初始出现页面等。
    </template>
  </Demo>
  <Demo :components="Carousel2demo">
    <template v-slot:intro>
      支持带有圆点的主题，点击圆点即可跳转。
    </template>
  </Demo>
  <Demo :components="Carousel3demo">
    <template v-slot:intro>
      支持方向方向，点击方向即可循环跳转。
    </template>
  </Demo>

  <attr :data="data" />
</template>

<script lang="ts">
import Carousel from '../../lib/Carousel/Carousel.vue';
import carItem from '../../lib/Carousel/Item.vue';
import Demo from '../Demo.vue';
import Carousel1Demo from './Carousel1Demo.vue';
import Carousel2demo from './Carousel2demo.vue';
import Carousel3demo from './Carousel3demo.vue';
import attr from '../Attributes.vue'

export default {
  components: {
    Carousel, carItem,Demo,attr
  },
  setup() {
    const data = [
      {params: 'carData',
        desc: '轮播数量',
        type: 'array',
        select: '----',
        default: '----',},
      {params: 'autoPlay',
        desc: '是否自动轮播',
        type: 'boolean',
        select: 'true / false',
        default: 'true',},
      {params: 'duration',
        desc: '跳转时间',
        type: 'number',
        select: '任意数字',
        default: '----',},
      {params: 'initial',
        desc: '初始页面',
        type: 'number',
        select: 'index of array',
        default: '0',},
      {params: 'hasDot',
        desc: '出现圆点',
        type: 'boolean',
        select: 'true / false',
        default: 'false',},
      {params: 'hasDirector',
        desc: '出现方向',
        type: 'boolean',
        select: 'true / false',
        default: 'false'},
    ]
    return {
      Carousel1Demo,
      Carousel2demo,
      Carousel3demo,
      data
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 20px auto;
  overflow: hidden;
}
</style>