<demo>
支持texts属性
</demo>
<template>
  <Rate :texts="texts" ></Rate>
</template>

<script lang="ts">
import Rate from '../../lib/Rate.vue';
import {ref} from 'vue';
export default {
  components:{
    Rate
  },
  setup(){
    const texts = ref([
      {text:'0'},//必须为0
      {text:'吐了！'},
      {text:'辣鸡！'},
      {text:'平庸~'},
      {text:'有趣~'},
      {text:'吹爆！'},
    ])
    return{
      texts
    }
  }
};
</script>