<template>
  <div class="box">
    <el-row>
      <el-col :span="12">
    <div class="img">
      <img src="../../assets/public_images/goout.jpeg" alt=""/>
    </div>
      </el-col><el-col :span="12">
      <h2 class="title">外出报备申请</h2></el-col>
    </el-row>
      <div class="jz">
      <p class="zs">申请人信息</p>

      <el-form ref="form" :model="form" label-position="top" label-width="80px">
        <el-form-item label="申请人">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
        <el-form-item label="联系电话">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>

<p class="zs">部门信息</p>
  <el-form-item label="公司/学校">
    <el-select v-model="form.region" placeholder="请选择公司/学校">
      <el-option label="宁波财经学院" value="shanghai"></el-option>
      <el-option label="浙江万里学院" value="beijing"></el-option>
      <el-option label="宁波大学" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="工号/学号">
    <el-input v-model="form.idcard"></el-input>
  </el-form-item>

<p class="zs">外出信息</p>
<el-form-item label="请假类别">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label="事假" value="shanghai"></el-option>
      <el-option label="病假" value="beijing"></el-option>
      <el-option label="公假" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="目的地范围">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label="宁波市内" value="shanghai"></el-option>
      <el-option label="浙江省内宁波市外" value="beijing"></el-option>
      <el-option label="浙江省外" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="前往目的地">
    <el-input v-model="form.goout"></el-input>
  </el-form-item>
  <el-form-item label="请假时间">
      <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col></el-form-item>
<el-form-item label="天数">
    <el-input v-model="form.day"></el-input>
  </el-form-item>

  <el-form-item label="外出事由">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  
        
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
.img {
  text-align: center;
}
.box img {
  height: 200px;
}
.jz {
  padding-top: 50px;
  text-align: left;
  margin: 0 auto;
  width: 65%;
}
.zs{
  font-size:18px;
  padding-bottom: 13px;
  color: rgb(63, 59, 59);
}
.title{
  padding-top: 100px;
  text-align: left;
  margin-left: -70px;
  padding-bottom: 15px;
}
.btn{
  text-align: center;
  padding-top: 20px;
}
</style>
