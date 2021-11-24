<template>
  <div class="box">
    <div class="cardList" v-for="(item, index) in assessList" :key="index">
      <el-row :gutter="20">
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <img src="../../assets/public_images/notice.png" alt="" /></div
        ></el-col>
        <el-col :span="20"
          ><div class="grid-content bg-purple">【通知公告】{{ item.addr }}</div>
          {{ item.name }}</el-col
        >
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      assessList: [
        {
          addr: "q",
          name: "w",
        },
        {
          addr: "a",
          name: "s",
        },
      ],
      userType: null,
    };
  },
  mounted() {
    this.userType = this.$route.query.userType;
  },
};
</script>
<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
</style>