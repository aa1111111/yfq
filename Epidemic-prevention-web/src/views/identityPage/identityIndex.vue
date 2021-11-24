<template>
  <div class="box">
    <el-steps
      :active="active"
      finish-status="success"
      class="step"
      align-center
    >
      <el-step title="身份认证"></el-step>
      <el-step title="完善信息"></el-step>
      <el-step title="完成认证"></el-step>
    </el-steps>
    <div class="jz" v-show="active == 0">
      <el-form
        ref="form"
        :model="form"
        size="medium"
        label-width="100px"
        class="form"
      >
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码">
          <el-input v-model="form.idCard"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <p>请确认您是本人，认证通过后不可修改</p>
            <el-button type="primary" @click="next1">下一步</el-button>
            <el-button @click="cancle">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="jz" v-show="active == 1">
      <el-form
        ref="form"
        :model="form"
        size="medium"
        label-width="120px"
        class="form"
      >
        <el-form-item label="目前所在地区">
          <v-distpicker
            :province="form.addressprovince"
            :city="form.addresscity"
            :area="form.address__dist"
            @selected="onSelected"
          ></v-distpicker>
        </el-form-item>
        <el-form-item label="所在公司/学校">
          <el-select v-model="form.region" placeholder="请选择公司/学校">
            <el-option label="宁波财经学院" value="shanghai"></el-option>
            <el-option label="浙江万里学院" value="beijing"></el-option>
            <el-option label="宁波大学" value="qq"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工号/学号">
          <el-input v-model="form.idcard"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="nextUp">上一步</el-button>
            <el-button type="primary" @click="next2">下一步</el-button>
            <el-button @click="cancle">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="jz" v-show="active == 2">
      <el-result
        icon="success"
        title="完成认证"
        subTitle="请根据提示进行操作"
        :style="{ marginTop: '-30px' }"
      >
      </el-result>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      userType: null,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  mounted() {
    this.userType = this.$route.query.userType;
  },
  methods: {
    onSelected(data) {
      this.form.addressprovince = data.province.value;
      this.form.addresscity = data.city.value;
      this.form.addressdist = data.area.value;
    },
    cancle() {
      this.form = {};
    },
    next1() {
      this.active = 1;
    },
    nextUp() {
      this.active = 0;
    },
    next2() {
      this.active = 2;
    },
  },
};
</script>
<style scoped>
.box {
  padding: 200px 100px 0 100px;
  /* color: #d6aac58c; */
}
.step {
  padding: 50px 0px;
}
.form {
  padding: 0 30px;
}
.jz {
  padding-top: 20px;
  text-align: left;
  margin: 0 auto;
  width: 65%;
}
.btn {
  margin-top: 10px;
  text-align: center;
}
.btn p {
  font-size: smaller;
  padding-bottom: 3px;
}
</style>