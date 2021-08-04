<template>
      <div class="main">
        <div class="grade-box">
          <img v-for="(star,index) in stars" v-bind:src="star.src" @click="rating(index)" alt="星星图片"/>
        </div>
        <div class="text">
         <span>{{text}}</span>
        </div>
      </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import starOffImg from '../assets/starOff.png';
import starOnImg from '../assets/starOn.png';

export default {
  props:{
    texts:{
      type: Array,
      default:[{text:''}]
    }
  },
  setup(props) {
    //制造两个响应数据
    const stars = ref([
          {
            src: starOffImg,
            active: false
          }, {
          src: starOffImg,
          active: false
        }, {
          src: starOffImg,
          active: false
        },
          {
            src: starOffImg,
            active: false
          }, {
          src: starOffImg,
          active: false
        }
        ])
    const starNum = ref(0)
    const count = ref(0)
    const text = ref('')
    //制造评分方法
    const rating = (index)=>{
      const total = stars.value.length//星星总数
      const idx = index + 1 //选中的星星是第几个
      count.value = idx
       //设置第一次点击
      if(starNum.value === 0){
         starNum.value = idx
        for(let i=0; i<idx; i++){
          stars.value[i].src = starOnImg
          stars.value[i].active = true
        }//点击就会亮， starNum会变成一个第一次点击的值，下面使用它作为参照
      }else{
        if(idx === starNum.value){
          for(let i=index; i<total; i++){
            stars.value[i].src = starOffImg
            stars.value[i].active = false
          }//再点就取消，这里只取消当前项，前面的不会清除~0.0~
        }
        if(idx < starNum.value){
          for(let i=idx; i< starNum.value; i++){
            stars.value[i].src = starOffImg
            stars.value[i].active = false
          }//点击的星级小于现在的最高星级，就把高星级的干掉
          starNum.value = 0
          //防止starNum总是在高位。使得starNum归正
        }
        if(idx > starNum.value){
          starNum.value = idx
          for(let i=0; i<idx; i++){
            stars.value[i].src = starOnImg
            stars.value[i].active = true
          }//点击的星级大于现在的最高星级，前面
        }
      }
      // if(starNum.value === 5 && idx === 1){
      //   starNum.value = 0
      // }//点击5星以后，starNum就停止在5了，整个循环将失去对照。 这里可以作为补充，使得starNum归正

     //评价设置
      if(props.texts[0].text === '0'){
        if(count.value === 1){
        text.value = props.texts[1].text
      }else if(count.value === 2){
        text.value = props.texts[2].text
      }else if(count.value === 3){
        text.value = props.texts[3].text
      }else if(count.value === 4){
        text.value = props.texts[4].text
      }else if(count.value === 5){
        text.value = props.texts[5].text
      }}

    }

    return{
      rating,
      stars,
      starNum,
      count,
      text
    }
  }
};
</script>

<style lang="scss" scoped>
$xxx: #e2c405;
.main{
  display: flex;
  .text{
    min-width:50px;
    margin-left:5px ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
      position: absolute;
      color: #707070;
      left: 0;
    }
  }
  .grade-box{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    >span{
      position: absolute;
      color: #707070;
      right:20%;
    }

    >img{
      width:25px;
      height: 25px;
      padding: 4px;

      &:hover{
        transform: scale(1.2)
      }
    }
  }
}

</style>