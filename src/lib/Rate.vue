<template>
<div>rate评分</div>
<div class="main">
  <div class="header">默认主题</div>
  <div class="content">
    <ol>
      <li @click="L1" ref="A"></li>
      <li @click="L2" ref="B"></li>
      <li @click="L3" ref="C"></li>
      <li @click="L4" ref="D"></li>
      <li @click="L5" ref="E"></li>
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
     const D = ref()
     const E = ref()
     const L1 = ()=>{
       if(A.value.style.background === ''){
         A.value.style.background = 'yellow'
         B.value.style.background = ''
       }else {
         A.value.style.background = ''
         B.value.style.background = ''
         C.value.style.background = ''
         D.value.style.background = ''
         E.value.style.background = ''
       }
     }
     const L2 = ()=>{
       if(B.value.style.background === ''){
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
         C.value.style.background = ''
       }else {
         C.value.style.background = ''
         D.value.style.background = ''
         E.value.style.background = ''
       }
     }

     const L3 = ()=>{
       if(C.value.style.background === ''){
         C.value.style.background = 'yellow'
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
         D.value.style.background = ''
       }else {
         D.value.style.background = ''
         E.value.style.background = ''
       }
     }

     const L4 = ()=>{
       if(D.value.style.background === ''){
         D.value.style.background = 'yellow'
         C.value.style.background = 'yellow'
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
       }else{
         E.value.style.background = ''
       }
     }

     const L5 = ()=>{
       if(E.value.style.background === ''){
         E.value.style.background = 'yellow'
         D.value.style.background = 'yellow'
         C.value.style.background = 'yellow'
         B.value.style.background = 'yellow'
         A.value.style.background = 'yellow'
       }
     }



     return{
       A,
       B,
       C,
       D,
       E,
       L1,
       L2,
       L3,
       L4,
       L5
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