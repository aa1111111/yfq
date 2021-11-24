<template>
  <div>
    <h2>全国新冠肺炎疫情实时状态</h2>
    <p>更新于当地时间</p>
    <el-row>
      <el-col :span="12"><p class="p1">现有确诊</p></el-col>
      <el-col :span="12"><p class="p1">累计确诊</p></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><p class="p1">累计死亡</p></el-col>
      <el-col :span="12"><p class="p1">累计治愈</p></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MapText",
  data() {
    return {};
  },
};
</script>
<style scoped>
h2 {
  color: #0276a1;
  padding: 10px 0 10px 0;
}
p {
  color: #009dc0;
  padding: 15px 0px 15px 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  
}
.p1{
    background-color: rgba(147, 182, 187, 0.3);
    border-radius:10px;
    text-align: center;
}

</style>