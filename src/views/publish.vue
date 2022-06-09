<template>
  <el-container id="publish">
      <el-header>
          <h1>发布帖子</h1>
      </el-header>
    <el-main id="main">
        <div id="post">
          <el-card>
            <div>
    <div slot="header" id="postHead">  
                <el-input
  placeholder="请输入标题"
  v-model="tit"
  clearable>
</el-input>
            </div>
            <h1></h1>
<el-input
  type="textarea"
  :autosize="{ minRows: 20, maxRows: 100}"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
            </div>
          </el-card>
        </div>
    </el-main>
    <el-footer >
        <el-button type="primary" @click="ppp" style="float: right">发布</el-button>
    </el-footer>
  </el-container>
</template>

<style scoped>
#search {
  font-family: 'Noto Serif SC', serif;
  margin-top: 20px;
}
#head {
  background-color: #d4e7d9;
  color: #333;
  text-align: center;
  line-height: 60px;
}
#main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
<script>
import qs from "qs";
export default {
      data() {
          return{
              tit:"",
              textarea:""
          }
      }, 
       methods:{
    personal: function(){
      this.$router.push('/');
    },
    ppp: function(){
      if (this.$session.get("id") === 0) {
        this.$router.push("/login");
      } else {
        this.$axios({
          method: "post" /* 指明请求方式，可以是 get 或 post */,
          url: "/api/post/new/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          data: qs.stringify({
            /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
            title:this.tit,
            type:"课程推荐",
            content:this.textarea
          }),
        }).then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("发布成功");
              break;
            case 6002:
              this.$message.error("用户未登陆");
              break;
            case 6003:
              this.$message.error("标题不能为空");
              break;
            case 6004:
              this.$message.error("类型不能为空");
             break;
            case 6005:
              this.$message.error("内容不能为空");
              break;
            case 6006:
              this.$message.error("权限等级不能高于用户等级");
              break;
          }
        });
      }
    }
  }
}
</script>