<template>
<div>rate评分</div>
<div class="main">
  <div class="header">默认主题</div>
  <div class="content">
    <ol>
      <li @click="L1" ref="A"></li>
      <li @click="L2" ref="B"></li>
      <li @click="L3" ref="C"></li>
    </ol>
  </div>
</div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
   setup(){
     const A = ref()
     const B = ref()
     const C = ref()
     const L1 = ()=>{
       if(A.value.style.background === ''){
         A.value.style.background = 'yellow'
         B.value.style.background = ''
       }else {
         A.value.style.background = ''
         B.value.style.background = ''
         C.value.style.background = ''
       }
     }
     const L2 = ()=>{
       if(B.value.style.background === ''){
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
         C.value.style.background = ''
       }else {
         C.value.style.background = ''
       }
     }

     const L3 = ()=>{
       if(C.value.style.background === ''){
         C.value.style.background = 'yellow'
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
       }
     }



     return{
       A,
       B,
       C,
       L1,
       L2,
       L3
     }
   }
};
</script>

<style lang="scss" scoped>
$xxx: #e2c405;
.main{
  >.header{
    display: flex;
    justify-content: center;
    color: #707070;
  }
  >.content {
    > ol {
      display: flex;
      justify-content: center;

      > li {
        border: 1px solid black;
        margin: 3px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>