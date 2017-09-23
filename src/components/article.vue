<template>
  <el-row class="home-bg">
    <el-col :span="24">
      <h1 class="text-center">{{title}}</h1>
      <p class="content">那片笑声让我想起我的那些花</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'reader',
  data () {
    return {
      title: '栀子花香',
      content:""
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
.content {
  min-height: 100px;
}
</style>
