<template>
  <el-row>
    <el-col :span="24">
      <div v-if="list.length > 0">
        <h1 class="text-center">
          {{list[itemNum-1].topic_name}}
        </h1>
        <h2 class="text-center">测试时间: {{allTime}} s</h2>
        <ul>
          <li class="option-item" v-for="(item,index) in list[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" :key="index">
            <span class="option-style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
            <span class="option-detail">{{item.answer_name}}</span>
          </li>
        </ul>
      </div>
      <span class="next" @click="nextItem" v-if="itemNum < list.length">下一题</span>
      <span class="next" v-else @click="submitAnswer">提交</span> 
      <span class="next" @click="reset">重置</span>  
      <div class="score" v-text="scoreTips" v-show="scoreTips"></div> 
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null,//选中答案id
      scoreTips: '',
      score: 0,
      rightAnswer: [2, 7, 12, 13], //正确答案
      scoreTipsArr: ['还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
		}
  },
  computed: mapState([
    'itemNum', //第几题
    'level', //第几周
    'list', //题目详情
    'timer', //计时器
    'answerid',
    'allTime',
  ]),
  methods: {
    ...mapActions([
      'addNum','init','count'
    ]),
    computedScore(){
      this.answerid.forEach((item, index) => {
          if (item == this.rightAnswer[index]) {
              this.score += 20;
          }
      })
    },
    reset(){
      this.init();
      clearInterval(this.timer)
      this.count();
    },
    getScoreTip: function (){
      if(this.score <= 20) {
          this.scoreTips = this.scoreTipsArr[0];
          return
      }
      if(this.score <= 40) {
          this.scoreTips = this.scoreTipsArr[1];
          return
      }
      if(this.score <= 60) {
          this.scoreTips = this.scoreTipsArr[2];
          return
      }
      if(this.score <= 80) {
          this.scoreTips = this.scoreTipsArr[3];
          return
      }
      if(this.score <= 100) {
          this.scoreTips = this.scoreTipsArr[4];
      }
    },
    nextItem() {
      if(this.choosedNum !==null){
        this.choosedNum = null
        this.addNum(this.choosedId)
      }else{
        alert('您还没有选择答案哦')
      }
    },
    chooseType: type => {
      switch(type){
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    choosed(type,id){
      this.choosedNum = type;
      this.choosedId = id;
    },
    submitAnswer(){
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        this.computedScore();
        this.getScoreTip();
        clearInterval(this.timer)
      }else{
        alert('您还没有选择答案哦')
      }
    }
  },
  created(){
  //初始化信息
    this.init();
    this.count();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
//@import '../style/common.less';
@color:#05CE3E;
.home-bg {
  background-color:@color;
}
.option-item {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
  padding-left:20px;
  font-size:20px; 
  cursor: pointer;
}
.option-style{
  width: 15px;
  height: 15px;
  line-height: 15px;
  padding:5px;
  text-align: center;
  margin-right: 15px;
  background: #fff;
  border: 1px solid #ccc;
}
.has_choosed{
  background-color: @color;
  color: #00f;
  border-color: @color;
}
.next {
  display: inline-block;
  width: 200px;
  height: 40px;
  margin-right: 30px;
  line-height: 40px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: @color;
  border-radius: 5px;
  cursor: pointer;
}
.next:hover{
  background: darken(@color,10%)
}
.score {
  width: 60%;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  color:#ff0;
  background: #00f;
  border-radius: 10px;
}
</style>
