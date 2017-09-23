<template>
      <slide></slide>
</template>

<script>
import Slide from "./base/slide"
export default {
  name: 'homePage',
  components:{
    Slide
  },
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
