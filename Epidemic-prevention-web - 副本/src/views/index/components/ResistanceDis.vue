<template>
  <div class="fighting">
    <img src="../../../assets/public_images/BJ4.png" alt="" class="img2">
    <img src="../../../assets/public_images/new6.png" alt="" height="40px" class="img1">
    <div class="text">
      <el-row>
        <el-col :span="12">
    <p class="p1">在这场同严重疫情的殊死较量中 在这场没有硝烟的抗疫战场上</p>
    <p>我们以人民至上、生命至上诠释了人间大爱</p>
    <p>用众志成城、坚忍不拔书写了抗疫史诗。</p>
    <p style="color:#8d3e8f">面对这场艰苦的抗疫之战，我们一定赢！!</p>
        </el-col>
        <el-col :span="12">
          <img src="../../../assets/public_images/fighting.png" alt="" width="90%" class="img3">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResistanceDis",
  data() {
    return {};
  },
};
</script>
<style scoped>
.fighting {
}
.p1{
  padding-top: 50px;
}
p {
  color: #009dc0;
  padding: 15px 0px 0px 0px;
  margin-right: 10px;
  margin-bottom: 10px; 
  font-weight: 600;
}
.text{
        padding: 0px 60px 0px 60px;
        width: inherit;
        font-size: 16px;
        position: absolute;/*设为绝对定位*/
        
}
.img2 {
        position: absolute;/*设为绝对定位*/
        width: 84.2%;
}
.img3{
  margin-top: -7px;
  margin-left: 13px;
}
.img1{
padding-top: 9px;
margin-left: -8px;
}
</style>