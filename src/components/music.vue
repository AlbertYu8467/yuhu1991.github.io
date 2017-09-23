<template>
  <el-row class="home-bg">
    <el-col :span="16">
      player
    </el-col>
    <el-col :span="8">
      lrc
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@color:blue;
.home-bg {
  background-color:@color;
}
</style>
