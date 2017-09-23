<template>
  <div>
    <div class="tiger-head">
      <el-row type="flex" justify="end" class="bg-blue">
        <el-col :span="10" class="flex-start">
          <el-button type="primary">
            <router-link to="/" class="home">首页</router-link>
          </el-button>
        </el-col>
        <el-col :span="14" class="flex-end">
          <div class="block">
            <span class="demonstration">主题色</span>
            <el-color-picker v-model="themeColor" @change="changeTheme"></el-color-picker>
          </div>
          <el-dropdown>
            <el-button type="primary">
              开发组件<i class="el-icon-caret-bottom el-icon-right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item @click.native="link('music')">
                music
              </el-dropdown-item>
              <el-dropdown-item @click.native="link('game')">
                game
              </el-dropdown-item >
              <el-dropdown-item @click.native="link('movie')">
                movie
              </el-dropdown-item>
              <el-dropdown-item @click.native="link('test')">
                test
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown split-button type="primary" >
          我的阅读
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="link('poem')">
                poem
              </el-dropdown-item>
              <el-dropdown-item @click.native="link('article')">
                article
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="primary" @click="dialogFormVisible=true">游客登陆</el-button> 
          <span class="face"></span>
        </el-col>
      </el-row>
    </div>

    <div class="container"  v-bind:style="{backgroundColor:bgColor}">
      <el-row type='flex' justify="space-between">
        <el-col :span="7">
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
                  <p孤帆远影碧空尽</p>
                  <p>唯见长江天际流</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
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
  .face {
    float: left;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-size: cover;
    background-image: url(/static/tiger.jpg);
    cursor: pointer;
  }
  .demonstration {
    float: left;
    margin: 0 5px;
    height: 36px;
    line-height: 36px;
    color:#fff;
  }
</style>
