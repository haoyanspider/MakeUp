<template>
  <div id="quantity">
    <el-input-number size="mini" v-model="num1"></el-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style>
#quantity .el-input-number__increase,#quantity .el-input-number__decrease{
  background-color: transparent;
  border: none;
  color: #111111;
}
#quantity .el-input__inner{
  border: 1px solid #111111;
  border-radius: 0;
  color: #111111;
}
</style>