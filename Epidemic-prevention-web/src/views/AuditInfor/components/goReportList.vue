<template>
  <div>
    <div class="search">
      <el-row :gutter="90">
        <el-col :span="6">
          <div class="search-item">
            <span style="width: 100px">姓名</span>
            <el-input
              v-model="searchQuery.patName"
              size="small"
              placeholder="请输入"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="search-item">
            <el-button size="small" @click="reset">
              <i class="el-icon-refresh"></i>
              重置</el-button
            >
            <el-button
              style="
                background-color: #e2a0c9;
                color: #ffffff;
                border-color: #e2a0c9;
              "
              size="small"
              class="btnh"
              @click="search(1)"
            >
              <i class="el-icon-search"></i>
              查询</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="tool">
      <el-row>
        <el-button
          @click="addEmpType"
          class="btnh"
          style="
            background-color: #e2a0c9;
            color: #ffffff;
            border-color: #e2a0c9;
          "
          size="small"
        >
          <i class="el-icon-circle-plus-outline"></i>
          新增
        </el-button>

        <el-button @click="deleteEmpType" size="small">
          <i class="el-icon-delete"></i>
          删除
        </el-button>
      </el-row>
    </div>
    <div class="box2">
      <el-table
        class="el-table"
        :data="tableData"
        highlight-current-row
        height="300"
        ref="table"
        :header-cell-style="{ background: '#994a8e', color: 'white' }"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="50"
          fixed
          :reserve-selection="true"
          align="center"
        >
        </el-table-column>
        <el-table-column
          type="index"
          width="70"
          label="序号"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="patName"
          label="姓名"
          width="100"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式"
          width="100"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="patAddress"
          label="外出地点"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column prop="remark" label="外出原因" fixed align="center">
        </el-table-column>
        <el-table-column prop="remark" label="外出时间" fixed align="center">
        </el-table-column>
        <el-table-column prop="remark" label="审核状态" fixed align="center">
        </el-table-column>
        <el-table-column prop="remark" label="备注说明" fixed align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130" align="center">
          <template slot-scope="scope">
            <el-button @click="handleCheck(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          clockTime: "2021-09-27 11:13:33",
          tel: "13435442668",
          patName: "王小虎",
          patAddress: "上海市普陀区金沙江路 1518 弄",
          remark: "健康",
        },
        {
          clockTime: "2021-09-27 11:13:33",
          tel: "562232333",
          patName: "王小虎2",
          patAddress: "上海市普陀区金沙江路 1518 弄",
          remark: "健康",
        },
        {
          clockTime: "2021-09-27 11:13:33",
          tel: "12223465",
          patName: "王小虎3",
          patAddress: "上海市普陀区金沙江路 1518 弄",
          remark: "健康",
        },
        {
          clockTime: "2021-09-27 11:13:33",
          tel: "1234567676",
          patName: "王小虎4",
          patAddress: "上海市普陀区金沙江路 1518 弄",
          remark: "健康",
        },
      ],
      currentRow: null,
      searchQuery: {
        patName: ""
      },
    };
  },
  methods: {
    handleCheck(item) {
      this.$refs.checkDialog.open(1, item);
    },
    handleReview(item) {
      this.$refs.reviewDialog.open(1, item);
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterCon(value, row) {
      return row.condition === value;
    },
    reset() {
      (this.searchQuery = {
        idCard: "",
        patName: "",
        clockCon: [],
        bodyCon: [],
      }),
        (this.createDataRange = []);
      this.modifyDataRange = [];
      this.search();
    },
    addEmpType() {
      console.log(1);
    },
    deleteEmpType() {
      console.log(2);
    },
  },
};
</script>
<style scoped>
.search {
  border-bottom: 1px solid #eeeeee;
}
.el-col {
  margin-right: 10px;
}
.search-item {
  margin: 15px 0 20px -30px;
  display: flex;
  line-height: 200%;
  color: #363636;
}
.search-item span {
  padding: 0 10px 0 0;
  display: inline-block;
  width: 90px;
  text-align: right;
}
.el-table {
  opacity: 0.8;
}
.box2 {
  background-color: #ebcfe03a !important;
}
.tool {
  padding: 10px 0;
}
.btnh :hover {
}
</style>