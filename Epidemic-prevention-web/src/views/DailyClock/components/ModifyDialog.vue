<template>
  <div>
    <el-dialog
      title="修改"
      width="600px"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      class="minDialog"
    >
      <!-- <el-form

        ref="form"
        :model="form"
        label-width="120px"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="审核是否通过:" prop="branchCode">
          <el-select
            filterable
            clearable
            size="small"
            v-model="form.branchCode"
          >
            <el-option
              v-for="item in branchList"
              :key="item.value"
              :label="item.shName"
              :value="item.shId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="审核不通过原因:" prop="reason">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8 }"
            placeholder="请输入内容"
            style="width: 90%"
            v-model="form.reason"
          >
          </el-input>
        </el-form-item>
      </el-form> -->
      <div class="form" style="padding-bottom:10px">{{form.name}}<div style="float: left; padding-right:20px;">姓名：</div></div>
      <el-form
        label-position="top"
        ref="form"
        :model="form"
        label-width="120px"
        :rules="rules"
      >
        <el-form-item label="1.目前所在地区">
          <v-distpicker
            :province="form.addressprovince"
            :city="form.addresscity"
            :area="form.address__dist"
            @selected="onSelected"
          ></v-distpicker>
        </el-form-item>
        <el-form-item
          label="2.过去21天是否健康（如果21天内有过发烧情况，请选择有发烧、咳嗽等症状）" prop="a"
        >
          <el-radio-group v-model="form.a">
            <el-radio label="健康"></el-radio>
            <el-radio label="有发烧、咳嗽等症状"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="3.过去21天是否有涉及中高风险地区的旅居史" prop="b">
          <el-radio-group v-model="form.b">
            <el-radio label="否"></el-radio>
            <el-radio label="是，过去21天有涉及中风险地区旅居史"></el-radio>
            <el-radio label="是，过去21天有涉及高风险地区/封闭管理"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="4.过去21天是否有国外或港台的旅居史" prop="c">
          <el-radio-group v-model="form.c"
            >'
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="5.过去21天是否接触过新型冠状病毒确诊患者/无症状感染者/核酸检测为阳性者" prop="d"
        >
          <el-radio-group v-model="form.d">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="6.目前是否被所在街道/社区等部门要求居家/集中隔离" prop="e">
          <el-radio-group v-model="form.e">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="7.目前是否是新型冠状病毒阳性（确诊）患者/正处于疑似待排查期间或曾是新型冠状病毒确诊患者/无症状感染者痊愈不足90天" prop="f"
        >
          <el-radio-group v-model="form.f">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="8.是否有病愈/隔离期满/涉及风险地区行程后，通过核酸检测（未诊断阳性或未被隔离的同学请选择“未检测”，检测结果未出前请选择“未检测”）" prop="g"
        >
          <el-radio-group v-model="form.g">
            <el-radio label="未检测（含不需要检测）"></el-radio>
            <el-radio label="已通过"></el-radio>
            <el-radio label="未通过"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="9.是否已接种新冠疫苗" prop="h">
          <el-radio-group v-model="form.h">
            <el-radio label="未注射新冠疫苗"></el-radio>
            <el-radio label="未完成，但已注射部分阶段新冠疫苗"></el-radio>
            <el-radio label="已完成注射新冠疫苗"></el-radio>
          </el-radio-group> </el-form-item
      ></el-form>
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
          name:"王小虎",
        addressprovince: "浙江省",
        addresscity: "宁波市",
        address__dist: "鄞州区",
        a: "健康",
        b: "否",
        c: "否",
        d: "否",
        e: "否",
        f: "否",
        g: "未检测",
        h: "已完全注射新冠疫苗",
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
        d: [{ required: true, message: "请选择", trigger: "blur" }],
        e: [{ required: true, message: "请选择", trigger: "blur" }],
        f: [{ required: true, message: "请选择", trigger: "blur" }],
        g: [{ required: true, message: "请选择", trigger: "blur" }],
        h: [{ required: true, message: "请选择", trigger: "blur" }],
      },
      dialogFormVisible: false,
      id: "",
    };
  },
  methods: {
      onSelected(data) {
    //   this.form.addressprovince = data.province.value
    //   this.form.addresscity = data.city.value
    //   this.form.addressdist = data.area.value
    },
    open(item) {
      this.id = item.id;
      this.form.a = item.shBranch;
      this.form.b = item.shBranch;
      this.form.c = item.shBranch;
      this.form.d = item.shBranch;
      this.form.e = item.shBranch;
      this.form.f = item.shBranch;
      this.form.g = item.shBranch;
      this.form.h = item.shBranch;
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
.form{
  margin-top: -15px;
}
</style>