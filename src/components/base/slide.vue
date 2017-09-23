<template>
  <el-carousel :interval="4000" type="card" height="350px" class="carousel">
    <el-carousel-item v-for="src in imgSrc" :key="src">
      <img :src="'static/scene/scene_'+src" alt="" class="img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data(){
    return {
        imgSrc:[
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
      ]
    }
    
  }
}
</script>

<style>
  .carousel {
    padding:80px 0;
  }
  .img {
    width:100%;
    height:100%;
  }
</style>