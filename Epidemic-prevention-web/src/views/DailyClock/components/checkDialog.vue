<template>
  <div>
    <el-dialog
      title="查看详情"
      width="600px"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      class="minDialog"
    >
      <!-- :style="{'background-image':'url('+require('@/assets/public_images/bizhi.jpg')+')', backgroundSize:'600px 350px',backgroundPosition:'340px 90px', backgroundRepeat: 'no-repeat'}" -->
      <div ref="form" class="form" v-show="this.view == 4">
        <el-row class="relation-item"
          ><el-col :span="16">姓名:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.name }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">1.目前所在地区:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p1 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18">2.过去21天是否健康:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p2 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18">3.过去21天是否有涉及中高风险地区的旅居史:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p3 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18">4.过去21天是否有国外或港台的旅居史:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p4 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18"
            >5.过去21天是否接触过新型冠状病毒确诊患者/无症状感染者/核酸检测为阳性者:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p5 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18"
            >6.目前是否被所在街道/社区等部门要求居家/集中隔离:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p6 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18"
            >7.目前是否是新型冠状病毒阳性（确诊）患者/正处于疑似待排查期间或曾是新型冠状病毒确诊患者/无症状感染者痊愈不足90天:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p7 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="18"
            >8.是否有病愈/隔离期满/涉及风险地区行程后，通过核酸检测:</el-col
          ><el-col :span="6">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p8 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">9.是否已接种新冠疫苗:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ dataForm.p9 }}
            </div></el-col
          ></el-row
        >
      </div>
      
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        name: "王小虎",
        p1: "浙江省 宁波市 鄞州区",
        p2: "健康",
        p3: "否",
        p4: "否",
        p5: "否",
        p6: "否",
        p7: "否",
        p8: "未检测",
        p9: "已完全注射新冠疫苗",
      },
      view: null,
      dialogFormVisible: false,
      id: "",
    };
  },
  mounted() {
    this.view = this.$route.query.view;
  },
  methods: {
    open(item) {
      this.id = item.id;
      this.dialogFormVisible = true;
    },
    handleClose() {
      this.dialogFormVisible = false;
      this.id = "";
    },
  },
};
</script>
<style scoped>
.form {
  margin-top: -30px;
}
.Fform {
  margin-top: -30px;
}
.relation-item {
  padding-top: 20px;
}
</style>