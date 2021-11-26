<template>
  <div class="bar-box">
  <div class="bar-pic"></div>
    <el-menu
    v-show="this.userType==2"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=rgb(255,255,255,0.5)
      text-color="#d482b5"
      active-text-color="#84317e"
    >
      <el-menu-item index="1" @click="onPush1()">主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">系统管理</template>
        <el-menu-item index="2-1" @click="onPush2()">管理员列表</el-menu-item>
        <el-menu-item index="2-2" @click="onPush3()">角色管理</el-menu-item>
        <el-menu-item index="2-3" @click="onPush4()">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="onPush5()">实时疫情状态</el-menu-item>
      <el-submenu index="4">
        <template slot="title">审核信息管理</template>
        <el-menu-item index="4-1" @click="onPush6()">复工申请管理</el-menu-item>
        <el-menu-item index="4-2" @click="onPush7()">外出报备管理</el-menu-item>
        <el-menu-item index="4-3" @click="onPush10()">历史行程管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">每日登记管理</template>
        <el-menu-item index="5-1" @click="onPush8()">每日健康打卡</el-menu-item>
      </el-submenu>
      <el-menu-item index="6" @click="onPush9()">通知公告管理</el-menu-item>
    </el-menu>
    <el-menu
    v-show="this.userType==1"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=rgb(255,255,255,0.5)
      text-color="#d482b5"
      active-text-color="#84317e"
    >
      <el-menu-item index="1" @click="onPush1()">主页</el-menu-item>
      <el-menu-item index="2" @click="onPushB()">身份认证</el-menu-item>
      <el-menu-item index="3" @click="onPush5()">实时疫情状态</el-menu-item>
      <el-submenu index="4">
        <template slot="title">申请信息</template>
        <el-menu-item index="4-1" @click="onPushD()">复工申请</el-menu-item>
        <el-menu-item index="4-2" @click="onPushE()">外出报备申请</el-menu-item>
      </el-submenu>
      <el-menu-item index="5" @click="onPushF()">每日健康打卡</el-menu-item>
      <el-menu-item index="6" @click="onPushG()">通知公告</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  // props: {
  //   isNest: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   basePath: {
  //     type: String,
  //     default: "",
  //   },
  // },
  data() {
    this.onlyOneChild = null;
    return {
      userType:null,
      activeIndex2: "1",
    };
  },
  mounted() {
    this.userType = this.$route.query.userType
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onPush1(){
      this.$router.push({ path: 'index', query: { userType: this.userType} })
    },
    onPush2(){
      this.$router.push({ path: 'index', query: { userType: this.userType} })
    },
    onPush3(){
      this.$router.push({ path: 'index', query: { userType: this.userType} })
    },
    onPush4(){
      this.$router.push({ path: 'index', query: { userType: this.userType} })
    },
    onPush5(){
      this.$router.push({ path: 'rtindex', query: { userType: this.userType} })
    },
    onPush6(){
      this.$router.push({ path: 'returnApplyIndex', query: { userType: this.userType,manage:1,view:1} })
    },
    onPush7(){
      this.$router.push({ path: 'goReportIndex', query: { userType: this.userType,manage:2,view:2} })
    },
    onPush8(){
      this.$router.push({ path: 'dcindex', query: { userType: this.userType,view:4} })
    },
    onPush9(){
      this.$router.push({ path: 'noticeIndex', query: { userType: this.userType} })
    },
    onPush10(){
      this.$router.push({ path: 'hisJouIndex', query: { userType: this.userType,view:3} })
    },
    onPushB(){
      this.$router.push({ path: 'identityIndex', query: { userType: this.userType} })
    },
    onPushD(){
      this.$router.push({ path: 'returnIndex', query: { userType: this.userType} })
    },
    onPushE(){
      this.$router.push({ path: 'gooutIndex', query: { userType: this.userType} })
    },
    onPushF(){
      this.$router.push({ path: 'userDailyIndex', query: { userType: this.userType} })
    },
    onPushG(){
      this.$router.push({ path: 'announceIndex', query: { userType: this.userType} })
    },
  },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
  }

.bar-pic{
  background:url("../../../assets/public_images/BJ3-1.png") no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment:fixed;
    background-size: 530px 190px;
    /* opacity: 0.88; */
    background-position: calc(100% - 100px) 0;
    /* background-position: top right; */
    position:fixed;
    
        top:0;
        left:0;
        width:100%;
        height:100%;
}
.el-submenu__title {
  height: 50px;
  line-height: 50px;
}
.el-submenu__title:hover{
   background-color: rgb(235, 236, 238,0.7) !important; 

}

.el-menu-item:hover {
  background-color: rgb(235, 236, 238,1) !important;

}
.el-menu-item.submenu-title-noDropdown {
  height: 50px;
  line-height: 50px;
}

.el-menu-item,
.el-submenu__title {
  font-size: 16px;
  font-weight: 600;
  /* text-align: center; */
}
/* .nest-menu .el-menu-item > span {
  margin-left: 14px;
  opacity: 0.65;
}
.nest-menu .el-menu-item.is-active > span {
  opacity: 1;
  color: #fff;
} */
</style>
