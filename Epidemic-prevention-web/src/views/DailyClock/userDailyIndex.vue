<template>
  <div class="box">
    <div class="img">
      <!-- <img src="../../assets/public_images/DailyClock.jpg" alt=""/> -->
    </div>
    <div class="jz">
      <div class="title">
      <h2>全员健康每日打卡</h2></div>
      <p class="zs">
        每天健康打卡报平安，请填写今日健康打卡。所有信息仅用于组织了解员工身体状况，不会泄露作他用。
      </p>
      <p class="rq">日期：2021年11月22日</p>

      <el-form ref="form" :model="form" label-position="top" label-width="80px">
        <el-form-item label="1.目前所在地区">
<v-distpicker :province="form.addressprovince" :city="form.addresscity" :area="form.address__dist" @selected="onSelected"></v-distpicker>
</el-form-item>
        <el-form-item label="2.过去21天是否健康（如果21天内有过发烧情况，请选择有发烧、咳嗽等症状）">
          <el-radio-group v-model="form.a">
            <el-radio label="健康"></el-radio>
            <el-radio label="有发烧、咳嗽等症状"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="3.过去21天是否有涉及中高风险地区的旅居史">
          <el-radio-group v-model="form.b">
            <el-radio label="否"></el-radio>
            <el-radio label="是，过去21天有涉及中风险地区旅居史"></el-radio>
            <el-radio label="是，过去21天有涉及高风险地区/封闭管理"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="4.过去21天是否有国外或港台的旅居史">
          <el-radio-group v-model="form.c">'
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="5.过去21天是否接触过新型冠状病毒确诊患者/无症状感染者/核酸检测为阳性者">
          <el-radio-group v-model="form.d">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="6.目前是否被所在街道/社区等部门要求居家/集中隔离">
          <el-radio-group v-model="form.e">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="7.目前是否是新型冠状病毒阳性（确诊）患者/正处于疑似待排查期间或曾是新型冠状病毒确诊患者/无症状感染者痊愈不足90天">
          <el-radio-group v-model="form.f">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="8.是否有病愈/隔离期满/涉及风险地区行程后，通过核酸检测（未诊断阳性或未被隔离的同学请选择“未检测”，检测结果未出前请选择“未检测”）">
          <el-radio-group v-model="form.g">
            <el-radio label="未检测（含不需要检测）"></el-radio>
            <el-radio label="已通过"></el-radio>
            <el-radio label="未通过"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="9.是否已接种新冠疫苗">
          <el-radio-group v-model="form.h">
            <el-radio label="未注射新冠疫苗"></el-radio>
            <el-radio label="未完成，但已注射部分阶段新冠疫苗"></el-radio>
            <el-radio label="已完成注射新冠疫苗"></el-radio>
          </el-radio-group>
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
      form: {
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onSelected(data) {
      this.form.addressprovince = data.province.value
      this.form.addresscity = data.city.value
      this.form.addressdist = data.area.value
    }
  }
};
</script>
<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
.img {
  text-align: right;
}
.box img {
  height: 200px;
}
.jz {
  padding-top: 20px;
  text-align: left;
  margin: 0 auto;
  width: 65%;
}
.zs{
  font-size: smaller;
  padding-bottom: 13px;
  color: dimgrey;
}
.title{
  text-align: center;
  padding-bottom:15px;
}
.rq{
  padding-bottom: 10px;
}
.btn{
  text-align: center;
  padding-top: 20px;
}
</style>
