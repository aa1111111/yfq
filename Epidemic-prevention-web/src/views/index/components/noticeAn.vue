<template>
  <div class="box-out">
    
   
    <img
      src="../../../assets/public_images/new6.png"
      alt=""
      height="40px"
      class="img1"
    />
    <div class="box-in">
    <div class="text">
      <el-row>
        <el-col :span="10">
          <img
            src="../../../assets/public_images/tongzhi.jpeg"
            alt=""
            width="40%"
            class="img3"
          />
        </el-col>
        <el-col :span="14"
          ><p class="p1">
            通知公告
          </p>
          <p class="js">我们以人民至上、生命至上诠释了人间大爱
          用众志成城、坚忍不拔书写了抗疫史诗。
        面对这场艰苦的抗疫之战，我们一定赢！!</p>
        <div class="bs">
              <el-button @click="clickIn1" style="border-color: #84317e">
                点击进入<i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
        </el-col>
      </el-row>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userType:null,
    };
  },
  mounted() {
    this.userType = this.$route.query.userType
  },
  methods: {
    clickIn1(){
      this.$router.push({ path: 'announceIndex', query: { userType: this.userType} })
    },
  },
};
</script>
<style scoped>
.box-out {
  height: 250px;
}
.box-in {
  margin: 10px 10px;
}
.img3{
  padding-left: 150px;
}
.p1{
  padding-top:16px;
  font-size: 20px;
  padding-bottom: 23px;
}
.bs {
  padding-top: 18px;
}
.js{
  font-size: 12px;
  padding-right: 140px;
}
</style>