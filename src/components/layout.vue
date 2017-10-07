<template>
  <div>
    <div class="tiger-head flex-space-between">
      <div class="block">
        <span class="demonstration">主题色</span>
        <el-color-picker v-model="themeColor" @change="changeTheme"></el-color-picker>
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal" 
              theme="light" text-color="#fff"  router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">开发组件</template>
          <el-menu-item index="/music">music</el-menu-item>
          <el-menu-item index="/game">game</el-menu-item>
          <el-menu-item index="/lucky">lucky</el-menu-item>
          <el-menu-item index="/test">test</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">我的阅读</template>
          <el-menu-item index="/poem">poem</el-menu-item>
          <el-menu-item index="/article">article</el-menu-item>
        </el-submenu>
        <el-menu-item @click="dialogFormVisible=true" index="2-1">
          游客登陆
        </el-menu-item>
        <el-menu-item @click="dialogFormVisible=true" index="2-2">
          <span class="face"></span>
        </el-menu-item>
      </el-menu> 
    </div>

    <div class="container"  v-bind:style="{backgroundColor:bgColor}">
      <el-row type='flex' justify="space-between">
        <el-col :span="6">
          <el-row>
            <el-col :span="24">
              <date-picker></date-picker>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{padding:'0px'}">
                <img src="static/building.jpg" alt="" class="building">
                <div class="building">
                  <h3>黄鹤楼送孟浩然之广陵</h3>
                  <p>故人西辞黄鹤楼</p>
                  <p>烟花三月下扬州</p>
                  <p>孤帆远影碧空尽</p>
                  <p>唯见长江天际流</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="18" class="tiger-router">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>


    <el-dialog title="欢迎登陆" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="游客昵称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import datePicker from "./base/datePicker"
export default {
  name: 'layout',
  components:{
    datePicker
  },
  data () {
    return {
        activeIndex:"",
        dialogFormVisible:false,
        form:{
          name:"I am a small bird",
          password:"custom is god"
        },
        visitorLogin: false,
        formLabelWidth:"120px",
        themeColor: '#7EBCE8',
        bgColor:'#7EBCE8'
    }
  },
  methods:{
    link(type){
      this.$router.push(type)
    },
    changeTheme(){
      this.bgColor = this.themeColor
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @bg-color:#7EBCE8;
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  p {
    padding: 0;
  }
  .building {
    width: 90%;
    display: block;
    margin: 0 auto;
    padding:10px 0;
    text-align: center;
  }
  .el-submenu .el-menu-item {
    min-width: 100px;
  }
  .home {
    color:#ffF;
  }
  .bg-blue {
    background:@bg-color;
  } 
  .text-center {
    text-align: center;
  }
  .flex-start,
  .flex-end,
  .flex-space-between,
  .flex-center,
  .flex-space-around {
    display: flex;
  }
  .flex-start {
    justify-content: flex-start;
  }
  .flex-end {
    justify-content: flex-end;
  }
  .flex-space-between{
    justify-content: space-between
  }
  .flex-center{
    justify-content: center;
  }
  .flex-space-around{
    justify-content: space-around;
  }
  .container {
    min-height: 400px;
    padding:0 10px;
  }
  .tiger-router {
    padding:20px;
  }
  .face {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: cover;
    background-image: url(/static/tiger.jpg);
    cursor: pointer;
  }
  .demonstration {
    display: inline-block;
    margin: 0 5px;
    height: 60px;
    line-height: 60px;
    color:#000;
    vertical-align: middle;
  }
</style>
