<template>
  <div>
    <el-dialog 
    title="审核"
      width="600px"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      class="minDialog"
    >
    <!-- :style="{'background-image':'url('+require('@/assets/public_images/bizhi.jpg')+')', backgroundSize:'600px 350px',backgroundPosition:'340px 90px', backgroundRepeat: 'no-repeat'}" -->
      <div v-show="this.manage==1">
      <el-form
        
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
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <div>
          <el-button class="btn1" type="primary" size="small" @click="handleAdd">
            保存</el-button
          >
          <el-button size="small" @click="handleClose"> 取消</el-button>
        </div>
      </div>
    </div>
      <div v-show="this.manage==2">
      <el-form
        
        ref="form2"
        :model="form2"
        label-width="120px"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="审核是否通过:" prop="branchCode2">
          <el-select
            filterable
            clearable
            size="small"
            v-model="form2.branchCode2"
          >
            <el-option
              v-for="item in branchList"
              :key="item.value"
              :label="item.shName"
              :value="item.shId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="审核不通过原因:" prop="reason2">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8 }"
            placeholder="请输入内容"
            style="width: 90%"
            v-model="form2.reason2"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <div>
          <el-button class="btn1" type="primary" size="small" @click="handleAdd">
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
      manage:null,
      form: {
        reason: "",
        branchCode: "",
      },
      rules: {
        branchCode: [
          { required: true, message: "请选择是否审核通过", trigger: "blur" },
        ],
      },
      dialogFormVisible: false,
      branchList: [],
      form2: {
        reason2: "",
        branchCode2: "",
      },
      id: "",
    };
  },
  methods: {
    open(item) {
      this.id = item.id;
      
      this.dialogFormVisible = true;
    },
    handleAdd() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          let data = {
            branchId: this.form.branchCode,
            reason: this.form.reason,
            id: this.id,
            type: 1,
          };

          modShStatus(data).then((res) => {
            if (res.code == 0) {
              this.$message.success("审核完成");
              this.$emit("refresh");
              this.handleClose();
            }
          });
        }
      });
    },
    handleClose() {
      if (this.$refs["form"]) {
        this.$refs["form"].resetFields();
      }
      this.dialogFormVisible = false;
      this.form = { reason: "", branchCode: "" };
      this.id = "";
    },
  },
  mounted() {
    this.manage = this.$route.query.manage;
  },
};
</script>
<style scoped>
.btn1{
  color: aliceblue;
  background-color: #e2a0c9;
    border-style:none;
}
</style>