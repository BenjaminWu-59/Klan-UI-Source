<template>
  <div id="app" class="row">
    <div class="form-group clearfix">
      <label class="control-label col-md-4">星星数量:{{ }}分</label>
      <div class="col-md-8">
        <div class="grade-box">
          <img v-for="(star,index) in stars" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import starOffImg from '../assets/starOff.png';
import starOnImg from '../assets/starOn.png';

export default {
  setup() {
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
    //制造评分方法
    const rating = (index)=>{
      const total = stars.value.length//星星总数
      const idx = index + 1 //选中的星星是第几个
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
        }
        if(idx > starNum.value){
          for(let i=0; i<idx; i++){
            stars.value[i].src = starOnImg
            stars.value[i].active = true
          }//点击的星级大于现在的最高星级，前面
        }
      }

      console.log('当前点击:'+idx);
      console.log(starNum.value);
    }

    return{
      rating,
      stars,
      starNum
    }
  }
};
</script>

<style lang="scss" scoped>
$xxx: #e2c405;
.grade-box{
  display: flex;
  justify-content: center;
  >img{
    width:30px;
    height: 30px;
    margin: 3px;
  }
}
</style>