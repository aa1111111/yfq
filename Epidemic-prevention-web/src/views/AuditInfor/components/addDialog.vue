<template>
  <div>
    <el-dialog
    title="新增"
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
      <div v-show="this.view==1">
      <el-form
      class="Fform"
        label-position="top"
        ref="Fform"
        :model="Fform"
        label-width="120px"
        :rules="rules"
      >
      <el-form-item label="申请人" prop="fname">
    <el-input v-model="Fform.fname"></el-input>
  </el-form-item>
        <el-form-item label="联系电话" prop="f1">
    <el-input v-model="Fform.f1"></el-input>
  </el-form-item>
  <el-form-item label="公司/学校" prop="f2">
    <el-select v-model="Fform.f2" placeholder="请选择公司/学校">
      <el-option label="宁波财经学院" value="shanghai"></el-option>
      <el-option label="浙江万里学院" value="beijing"></el-option>
      <el-option label="宁波大学" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="工号/学号" prop="f3">
    <el-input v-model="Fform.f3"></el-input>
  </el-form-item>

  <el-form-item label="申请内容" prop="f4">
    <el-input v-model="Fform.f4"></el-input>
  </el-form-item>
  <el-form-item label="申请时间" prop="f5">
      <el-date-picker type="date" placeholder="选择日期" v-model="Fform.f5" style="width: 100%;"></el-date-picker>
    </el-form-item>
  <el-form-item label="备注说明" prop="f6">
    <el-input type="textarea" v-model="Fform.f6"></el-input>
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
      </div>
      <div v-show="this.view==2">
      <el-form
      class="Gform"
        label-position="top"
        ref="Gform"
        :model="Gform"
        label-width="120px"
        :rules="rules"
      >
      <el-form-item label="申请人" prop="gname">
    <el-input v-model="Gform.gname"></el-input>
  </el-form-item>
        <el-form-item label="联系电话" prop="g2">
    <el-input v-model="Gform.g2"></el-input>
  </el-form-item>
  <el-form-item label="公司/学校">
    <el-select v-model="Gform.g3" placeholder="请选择公司/学校" prop="g3">
      <el-option label="宁波财经学院" value="shanghai"></el-option>
      <el-option label="浙江万里学院" value="beijing"></el-option>
      <el-option label="宁波大学" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="工号/学号" prop="g4">
    <el-input v-model="Gform.g4"></el-input>
  </el-form-item>

<el-form-item label="请假类别">
    <el-select v-model="Gform.g5" placeholder="请选择" prop="g5">
      <el-option label="事假" value="shanghai"></el-option>
      <el-option label="病假" value="beijing"></el-option>
      <el-option label="公假" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="目的地范围">
    <el-select v-model="Gform.g6" placeholder="请选择" prop="g6">
      <el-option label="宁波市内" value="shanghai"></el-option>
      <el-option label="浙江省内宁波市外" value="beijing"></el-option>
      <el-option label="浙江省外" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="前往目的地" prop="g7">
    <el-input v-model="Gform.g7"></el-input>
  </el-form-item>
  <el-form-item label="请假时间" prop="g9">
      <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="Gform.g8" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="Gform.g9" style="width: 100%;"></el-time-picker>
    </el-col></el-form-item>
<el-form-item label="天数" prop="g10">
    <el-input v-model="Gform.g10"></el-input>
  </el-form-item>

  <el-form-item label="外出事由" prop="g11">
    <el-input type="textarea" v-model="Gform.g11"></el-input>
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
      </div>
      <div v-show="this.view==3">
      <el-form
      class="Hform"
        label-position="top"
        ref="Hform"
        :model="Hform"
        label-width="120px"
        :rules="rules"
      >
      <el-form-item label="申请人" prop="gname">
    <el-input v-model="Gform.gname"></el-input>
  </el-form-item>
        <el-form-item label="联系电话">
    <el-input v-model="Hform.h1"></el-input>
  </el-form-item>
  <el-form-item label="公司/学校">
    <el-select v-model="Hform.h2" placeholder="请选择公司/学校">
      <el-option label="宁波财经学院" value="shanghai"></el-option>
      <el-option label="浙江万里学院" value="beijing"></el-option>
      <el-option label="宁波大学" value="qq"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="工号/学号">
    <el-input v-model="Hform.h3"></el-input>
  </el-form-item>

  <el-form-item label="出行地点">
    <el-input v-model="Hform.h4"></el-input>
  </el-form-item>
  <el-form-item label="出行时间">
      <el-date-picker type="date" placeholder="选择日期" v-model="Hform.h5" style="width: 100%;"></el-date-picker>
    </el-form-item>
  <el-form-item label="备注说明">
    <el-input type="textarea" v-model="Hform.h6"></el-input>
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
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Fform: {
        //   fname:"王小虎",
        // f1:"15535684468",
        // f2:"宁波财经学院",
        // f3:"1822110044",
        // f4:"复工申请",
        // f5:"2021-12-03",
        // f6:"健康",
      },
      Gform: {
        //   gname:"王小虎",
        // g2:"15535684468",
        // g3:"宁波财经学院",
        // g4:"1822110044",
        // g5:"事假",
        // g6:"宁波市内",
        // g7:"鄞州区",
        // g8:"2021-12-03",
        // g9:"2021-12-03",
        // g10:"1",
        // g11:"打疫苗",
      },
       Hform: {
        //   hname:"王小虎",
        // h1:"15535684468",
        // h2:"宁波财经学院",
        // h3:"1822110044",
        // h4:"浙江省 宁波市 鄞州区",
        // h5:"2021-12-03",
        // h6:"健康",
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
      view:null,
    };
  },
  mounted() {
    this.view = this.$route.query.view;
  },
  methods: {
      onSelected(data) {
    //   this.form.addressprovince = data.province.value
    //   this.form.addresscity = data.city.value
    //   this.form.addressdist = data.area.value
    },
    open(item) {
      this.id = item.id;
      // this.form.a = item.shBranch;
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
.Fform{
  margin-top: -20px;
}
.Gform{
  margin-top: -20px;
}
.Hform{
  margin-top: -20px;
}
</style>