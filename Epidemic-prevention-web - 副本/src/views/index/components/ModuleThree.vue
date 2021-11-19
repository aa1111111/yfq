<template>
  <div class="box-out">
    <img
      src="../../../assets/public_images/new6.png"
      alt=""
      height="40px"
      class="img1"
    />
    <div class="box-in">
      <el-row :gutter="30">
        <el-col :span="8"
          ><div class="box1">
            <div class="boxs">
              <img
                src="../../../assets/public_images/BD1.png"
                alt=""
                height="60px"
                class="imgs"
              />
              <p class="ps">系统管理</p>
            </div>
            <div class="cs">
              <p>对系统内容进行管理查看看</p>
            </div>
            <div class="bs">
              <el-button @click="clickIn1" style="border-color: #84317e">
                点击进入<i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8"
          ><div class="box2">
            <div class="boxs">
              <img
                src="../../../assets/public_images/BD5.png"
                alt=""
                height="60px"
                class="imgs"
              />
              <p class="ps">角色管理</p>
            </div>
            <div class="cs">
              <p>角色信息的列表查看、删除和修改</p>
            </div>
            <div class="bs">
              <el-button @click="clickIn3" style="border-color: #84317e"
                >点击进入
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box3">
            <div class="boxs">
              <img
                src="../../../assets/public_images/BD6.png"
                alt=""
                height="60px"
                class="imgs"
              />
              <p class="ps">通知管理</p>
            </div>
            <div class="cs">
              <p>管理查看一些通知公告信息</p>
            </div>
            <div class="bs">
              <el-button @click="clickIn3" style="border-color: #84317e"
                >点击进入
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModuleThree",
  data() {
    return {};
  },
  methods: {
    clickIn1() {
      this.$router.push({ path: "dcindex" });
    },
    clickIn2() {
      this.$router.push({ path: "dcindex" });
    },
    clickIn3() {
      this.$router.push({ path: "dcindex" });
    },
  },
};
</script>
<style scoped>
.box-out {
  height: 300px;
}
.box-in {
  margin: 10px 10px;
}
.imgs {
  padding: 10px 10px 10px 46px;
  float: left;
  display: inline-block;
}
.ps {
  color: #84317e;
  padding: 31px 0 0 15px;
  font-size: 20px;
  font-weight: 500;
  float: left;
  display: inline-block;
}
.boxs {
  padding: 10px 10px;
  height: 70px;
}
.bs {
  padding-top: 10px;
  text-align: center;
}
.cs {
  padding: 12px 10px;
  font-size: 15px;
  color: #147c9bb6;
  text-align: center;
}
.box1 {
  height: 200px;
  background-color: #e5e7c231;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(172, 165, 165, 0.7);
}
.box2 {
  height: 200px;
  background-color: #aa81bd1a;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(172, 165, 165, 0.7);
}
.box3 {
  height: 200px;
  background-color: #c1e2ec38;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(172, 165, 165, 0.7);
}
.img1 {
  padding-top: 9px;
  margin-left: -8px;
}
</style>