<template>
  <div>
    <div class="director dir-next" v-if="dir === 'next'" @click="dirClick(dir)">
      <a href="javascript:"> &gt </a>
    </div>
      <div class="director dir-prev" v-if="dir === 'prev'"  @click="dirClick(dir)">
        <a href="javascript:"> &lt </a>
      </div>
  </div>
</template>

<script lang="ts">
export default {
props:{
  dir:String
},
setup(props,ctx){
  const dirClick = (dir) =>{
    ctx.emit('dirClick',dir)
  }
  return{
    dirClick
  }
}
};
</script>

<style lang="scss" scoped>
.director{
position:absolute;
top:50%;
z-index:1;
margin-top: -15px;
width:20px;
height: 30px;
text-align: center;
line-height: 30px;
color: #fff;
font-size: small;
background-color: rgba(190, 183, 183, 0.5);

a{
  color:#fff;
  text-decoration: none;
}
&.dir-next{
  right: 0;
}
&.dir-prev{
  left: 0;
}
&:hover{
  background: #5d5d5d;
  font-size: 15.5px;
  font-weight: bold;
  cursor: pointer;
}
}

</style>