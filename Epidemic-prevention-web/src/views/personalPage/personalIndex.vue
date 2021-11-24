<template>
    <div class="box">
      <el-row :gutter="20" style="margin-top:10px;">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                 <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人中心</span>
        </div>
          <div class="name-role">
          <span class="sender" v-show="this.userType==2">Admin - {{dataForm.nickName}}</span>  
          <span class="sender" v-show="this.userType==1">User - {{dataForm.nickName}}</span>  
        </div>
        <div class="registe-info">
          <span class="registe-info">
            是否完成身份认证：
             已完成
          </span>
        </div>
        <el-divider></el-divider>
        <div class="personal-relation">
        <div class="relation-item">手机号:  <div style="float: right; padding-right:20px;">{{dataForm.phone}}</div></div>
    </div>
    <div class="personal-relation">
      <div class="relation-item">所属企业/学校:  <div style="float: right; padding-right:20px;">宁波财经学院</div></div> 
    </div>
       <div class="personal-relation">
      <div class="relation-item">首页链接:  <div style="float: right; padding-right:20px;">{{dataForm.homeUrl}}</div></div>      
    </div>
      </el-card>
        </div>
        </el-col>
    <el-col :span="16">
        <div class="grid-content bg-purple">
       <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>基本资料</span>
        </div>
        <div>
          <el-form label-width="80px" v-model="dataFrom" size="small" label-position="right">
          <el-form-item label="用户昵称" prop="nickName">
          <el-input  auto-complete="off" v-model="dataForm.nickName"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input auto-complete="off" v-model="dataForm.phone"></el-input>
        </el-form-item>
          <el-form-item label="首页链接" prop="homeUrl">
          <el-input  maxlength="18" v-model="dataForm.homeUrl"></el-input>
        </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary">提交</el-button>
          <el-button size="mini" type="warning" >退出登录</el-button>
        </div>
        </div>
      </el-card>
        </div>
        </el-col>

      </el-row>
    </div>
</template>

<script>
export default {
  data(){
    return{
        userType:null,
      dataForm:{
        nickName: 'zzy',
        phone: '15511308668',
        homeUrl: 'http://www.baidu.com'
      }
    }
  },
  mounted() {
    this.userType = this.$route.query.userType
  },
}
</script>

<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .name-role {
    font-size: 16px;
    padding: 5px;
   text-align:center;
  }
   .sender{
      text-align:center;
    }
.registe-info{
  text-align: center;
  padding-top:10px;
}
.personal-relation {
  font-size: 16px;
  padding: 0px 5px 15px;
  margin-right: 1px;
    width: 100%
}

.relation-item {
  padding: 12px;
   
}
.dialog-footer{
  padding-top:10px ;
  padding-left: 10%;
}
   /* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>