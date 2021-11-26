<template>
  <div>
    <el-dialog
      title="修改"
      width="600px"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      class="minDialog"
    >
      <el-form
        label-position="top"
        ref="form"
        :model="form"
        label-width="120px"
        :rules="rules"
      >
        <el-form-item label="发布人" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公告标题" prop="a">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-form-item label="发布时间" prop="b">
          <el-input v-model="form.b"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="c" class="nr">
          <el-input v-model="form.c"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <div>
          <el-button
            class="btn1"
            type="primary"
            size="small"
            @click="handleAdd"
          >
            保存</el-button
          >
          <el-button size="small" @click="handleClose"> 取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "王小虎",
        a: "浙江省疫情防控办发出通知 规定“健康码”和行程卡联查适用范围",
        b: "2021-12-01",
        c: "为了更精准做好疫情防控工作、降低疫情输入风险，同时方便广大群众出行，浙江省疫情防控办近期发出《关于规范“健康码”和行程卡联动核查工作要求的通知》。通知规定了“健康码”和行程卡的适用范围：在公共场合对个人健康情况进行查验时，“健康码”和行程卡可以联动核查。当全国中高风险地区动态清零时，除医疗机构外，其他公共场所可暂停行程卡查验。通知还对“健康码”和行程卡联查的重点场所进行了明确。在交通枢纽，出行乘客如“健康码”为绿码且行程卡不带星号，可正常出行。出行乘客如“健康码”为绿码但行程卡带星号，应对照疫情中高风险地区划分情况进行自我申报。根据申报情况，如需纳入“2+14”健康管理（核验48小时内新冠病毒核酸检测阴性证明并纳入14天日常健康监测）的，出示48小时内核酸检测阴性证明或就近进行核酸检测。无需纳入“2+14”等健康管理的，在签署承诺书后可进出交通枢纽，但提倡主动进行一次核酸检测。出行乘客如“健康码”为红码、黄码等异常码，或“健康码”为绿码但行程卡带星号且其自主申报去过国内中高风险地区的，交通枢纽现场工作人员初步甄别后，由交通枢纽所在社区工作人员对其实施相应的健康管理措施。在宾馆酒店，住宿人员如“健康码”为绿码且行程卡不带星号，可正常入住。住宿人员如“健康码”为绿码但行程卡带星号时，应对照浙江省疫情中高风险地区划分情况进行自我申报。根据申报情况，如需纳入“2+14”健康管理的，出示48小时内核酸检测阴性证明或就近进行核酸检测后可办理登记入住手续。无需纳入“2+14”等健康管理的，在签署承诺书后可办理登记入住手续，但提倡主动进行一次核酸检测。在住宿期间，由宾馆工作人员每天核对“健康码”颜色，每天都为绿色方可持续住宿。住宿人员如“健康码”为红码、黄码等异常码，或“健康码”为绿码但行程卡带星号且其自主申报去过国内中高风险地区的，宾馆酒店工作人员初步甄别后，由宾馆酒店所在社区对其实施相应的健康管理措施。对于出租车（网约车）跨省业务，乘客如“健康码”为绿码且行程卡不带星号，可正常乘车。对“健康码”为绿码、行程卡带星号的乘客，需其承诺未有中高风险地区旅居史方可承接跨省业务。对“健康码”为红码、黄码等异常码，或“健康码”为绿码但尚处于日常健康监测期间的乘客，应拒绝承接跨省业务，并告知其就近联系属地社区，纳入相应健康管理措施。对拒不配合“健康码”和行程卡核验的乘客，司机可拒绝搭载。浙江省疫情防控办提醒，请广大市民朋友积极主动配合疫情防控工作，如“健康码”为绿码且行程卡不带星号，在符合其他疫情防控要求的前提下，可自由进出上述公共场所。",
      },
      rules: {
        // addressprovince: [
        //   { required: true, message: "请选择省份", trigger: "blur" },
        // ],
        // addresscity: [{ required: true, message: "请选择市", trigger: "blur" }],
        // address__dist: [
        //   { required: true, message: "请选择区", trigger: "blur" },
        // ],
        a: [{ required: true, message: "请选择", trigger: "blur" }],
        b: [{ required: true, message: "请选择", trigger: "blur" }],
        c: [{ required: true, message: "请选择", trigger: "blur" }],
      },
      dialogFormVisible: false,
      id: "",
    };
  },
  mounted() {},
  methods: {
    onSelected(data) {
      //   this.form.addressprovince = data.province.value
      //   this.form.addresscity = data.city.value
      //   this.form.addressdist = data.area.value
    },
    open(item) {
      this.id = item.id;
      this.form.a = item.shBranch;
      this.dialogFormVisible = true;
    },
    handleAdd() {
      this.handleClose();
      //   this.$refs["form"].validate((valid) => {
      //     if (valid) {
      //       let data = this.form
      //       modShStatus(data).then((res) => {
      //         if (res.code == 0) {
      //           this.$message.success("审核完成");
      //           this.$emit("refresh");
      //           this.handleClose();
      //         }
      //       });
      //     }
      //   });
    },
    handleClose() {
      // if (this.$refs["form"]) {
      //   this.$refs["form"].resetFields();
      // }
      this.dialogFormVisible = false;
      //   this.form = [];
      //   this.id = "";
    },
  },
};
</script>
<style scoped>
.btn1 {
  color: aliceblue;
  background-color: #e2a0c9;
  border-style: none;
}
.form {
  margin-top: -15px;
}
.nr {
  padding-top: 12px;
  font-size: 12px;
  color: dimgrey;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>