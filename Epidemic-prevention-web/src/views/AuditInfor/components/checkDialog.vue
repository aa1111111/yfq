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
      <div ref="Fform" class="Fform" v-show="this.view == 1">
        <el-row class="relation-item"
          ><el-col :span="16">姓名:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Fform.fname }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">申请内容:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Fform.f1 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">申请时间:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Fform.f2 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">审核状态:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Fform.f3 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">备注说明:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Fform.f4 }}
            </div></el-col
          ></el-row
        >
      </div>
      <div ref="Gform" class="Gform" v-show="this.view == 2">
        <el-row class="relation-item"
          ><el-col :span="16">姓名:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.gname }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">联系方式:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g1 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">外出地点:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g2 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">外出原因:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g3 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">外出时间:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g4 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">审核状态:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g5 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">备注说明:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Gform.g6 }}
            </div></el-col
          ></el-row
        >
      </div>
      <div ref="Hform" class="Hform" v-show="this.view == 3">
        <el-row class="relation-item"
          ><el-col :span="16">姓名:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Hform.hname }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">联系方式:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Hform.h1 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">出行地点:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Hform.h2 }}
            </div></el-col
          ></el-row
        >
        <el-row class="relation-item"
          ><el-col :span="16">备注说明:</el-col
          ><el-col :span="8">
            <div style="float: right; padding-right: 20px">
              {{ Hform.h3 }}
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
      Fform: {
        fname: "王小虎",
        f1: "复工申请",
        f2: "2021-09-27 11:13:33",
        f3: "未审核",
        f4: "身体健康",
      },
      Gform:{
        gname:"王小虎",
        g1:"13435443524",
        g2:"浙江省 宁波市 鄞州区",
        g3:"因公务外出",
        g4:"2021-12-05",
        g5:"未审核",
        g6:"",
      },
      Hform:{
        hname:"王小虎",
        h1:"13435443524",
        h2:"浙江省 宁波市 鄞州区",
        h3:"健康",
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
.Gform {
  margin-top: -30px;
}
.Hform {
  margin-top: -30px;
}
.relation-item {
  padding-top: 20px;
}
</style>