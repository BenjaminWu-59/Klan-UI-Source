
<template>
  <div class="z-attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
      <tr>
        <th class="z-attr-title main-title" v-for="item in columns">{{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <td class="z-attr-title td" v-for="(value,key) in item">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'attr',
  props: {
    // columns: {
    //   type: Object
    // },
    data: {
      type: Object
    }
  },
  setup(){
    const columns = [{title:'参数'},{title: '说明'},{title: '类型'},{title: '可选值'},{title: '默认值'},]
    return{
      columns
    }
  }
}
</script>

<style lang="scss" scoped>
.z-attr {
  max-width: 650px;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .z-attr-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .main-title{
    border-bottom: 2px solid #d7d7d7;
  }
  .td {
    color: #606266;
  }
}
</style>