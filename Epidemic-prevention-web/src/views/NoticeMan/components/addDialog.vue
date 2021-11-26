<template>
  <div>
    <el-dialog
      title="新增"
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
  margin-top: -20px;
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