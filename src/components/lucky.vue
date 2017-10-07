<template>
  <el-row class="lottery-content">
    <el-col :span="18">
      <canvas width="400" height="400" id="c1">
        您的浏览器不支持Canvas标签
      </canvas>
    </el-col>
    <el-col :span="6">
      <p class="lottery-start">
        <el-button type="primary" @click="start()">开始</el-button>
      </p>
      <p class="lottery-end">
        <el-button type="primary" @click="end()">停止</el-button>
      </p>
      <p>
        <audio id="sound" src="static/data/bg.mp3" ref="sound">您的浏览器不支持audio标签</audio>
      </p>
    </el-col>
  </el-row>
</template>

<script>
class Draw {
  constructor (el,obj){
    this.el = el;
    this.src = obj.src
    this.path = {
      beginX: obj.beginX,
      beginY: obj.beginY,
      endX: 0,
      endY: 0,
      width: obj.width,
      height: obj.height
    }
  }
  draw(deg){
    var canvas = document.getElementById("c1")
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = this.src;
    var that = this;
    img.onload = function(){
      ctx.save()
      ctx.translate(200,200)
      ctx.rotate(deg*Math.PI/180);
      ctx.drawImage(img,that.path.beginX,that.path.beginY,that.path.width,that.path.height)
      ctx.restore();
    }
  }
}
export default {
  name: 'movie',
  mounted(){
    this.init();
  },
  data () {
    return {
      timer:"",
      deg: 0,
      pinObj:{
        beginX: -15,
        beginY: -50,
        endX: 0,
        endY:  0,
        width: 30,
        height: 100,
        src:'static/pin.png',
      },
      panObj:{
        beginX: -200,
        beginY: -200,
        endX: 0,
        endY:  0,
        width: 400,
        height: 400,
        src:'static/pan.png',
      },
      isPlay: false
    }
  },
  methods:{
    init(){
      clearInterval(this.timer)
      this.timer = null;
      var pan  = new Draw("canvas",this.panObj)
      pan.draw(this.deg);
      var pin = new Draw("canvas",this.pinObj)
      pin.draw(0);
    },
    isPlayMusic(){
      var sound = this.$refs.sound;
      if(this.isPlay){
        sound.play()
      }
      else{
        sound.pause()
      }
    },
    start(){
      var pan  = new Draw("canvas",this.panObj)
      var pin = new Draw("canvas",this.pinObj)
      this.deg =0;
      this.init();
      var self = this;
      this.timer = setInterval(function(){
          pan.draw(self.deg);
          self.deg += 1;
          pin.draw(0);
        },10)
        this.isPlay = true;
        this.isPlayMusic()
    },
    end(){
      this.init();
      this.isPlay = false;
      this.isPlayMusic()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.lottery-content {
  padding-top: 30px;
}
.lottery-start, 
.lottery-end {
  margin: 100px 0;
  text-align: center;
}
</style>