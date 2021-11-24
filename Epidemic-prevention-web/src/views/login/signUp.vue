<template>
  <div class="login-con">
    <div class="login-bkg">
      <div class="login-tit">
        <h1>
          注册
        </h1>
        <el-form
          ref="loginFrom"
          :model="form"
          :rules="rules"
          label-width="80px"
          class="login-box"
        >
          <ul>
            
            
            <li>
              <div class="zi">Phone</div>
              <el-input
              class="input"
                type="text"
                placeholder="Phone"
                v-model="form.phone"
                @keypress.enter.native="onSubmit('loginForm')"
              />
            </li>
            <li>
              <p class="zi">Full Name</p>
              <el-input
              class="input"
                type="text"
                placeholder="Username"
                v-model="form.username"
                @keypress.enter.native="onSubmit('loginForm')"
              />
            </li>
            <li>
              <div class="zi">Password</div>
              <el-input
              class="input"
                type="password"
                placeholder="Password"
                v-model="form.password"
                @keypress.enter.native="onSubmit('loginForm')"
              />
            </li><li>
              <div class="zi">Repeat Password</div>
              <el-input
              class="input"
                type="password"
                placeholder="Password"
                v-model="form.Repeatpassword"
                @keypress.enter.native="onSubmit('loginForm')"
              />
            </li>
          </ul>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click="onSubmit('loginForm')"
            >Sign Up</el-button
          >
          <el-button class="signup" @click="signUp"
            >You already have an account ! Sign In</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import SIdentify from "@/components/SIdentify/SIdentify";
export default {
  name: "Login",
  components: { SIdentify },
  data() {
    var validateInputCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value.toLowerCase() !== this.identifyCode.toLowerCase()) {
          callback(new Error("验证码有误!"));
        }
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        inputCode: "",
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" },
        ],
        inputCode: [
          { required: true, validator: validateInputCode, trigger: "blur" },
        ],
      },
      loading: false,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    signUp() {
      this.$router.push({ name: "login" });
    },
    onSubmit(formName) {
      this.$router.push({ name: "login" });
      if (this.form.username === "") {
        this.$message.warning("请输入账号");
      } else if (this.form.password === "") {
        this.$message.warning("请输入密码");
      } else {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$store
              .dispatch("user/login", {
                username: this.form.username,
                password: this.form.password,
              })
              .then(() => {
                this.$router.push({ path: this.redirect || "/" });
                this.loading = false;
              })
              .catch(() => {
                this.loading = false;
              });
          } else {
            this.$message.warning("信息填写有误!");
            this.refreshCode();
            return false;
          }
        });
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.login-con {
  /* height: 100%; */
  text-align: center;
  background: url("../../assets/public_images/beijing6.png") no-repeat center
    center;
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.login-bkg {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(172, 165, 165, 0.7);
}
.login-tit {
  margin-right: 40px;
  /* margin-left: -130px; */
  width: 100%;
}
.login-tit {
  text-align: center;
  color: #8b3680;
  font-family: "黑体";
}
.login-tit .zi{
    text-align: left;
    font-size: 16px;
    padding-top: 5px;
}
.login-tit h1 {
  padding-top: 28px;
  font-size: 24px;
  font-weight: normal;
}
.login-box {
  margin-top: 5px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  font-size: 14px;
}

.login-box >>> .el-input__inner {
  border: 0;
  font-size: 14px;
}


.login-box ul,
.login-box li {
  list-style: none;
}

.login-box li .input{
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}

.login-box li:first-child {
  margin-top: 0;
}

.signup {
  background-color: white;
  border: none;
  padding-top: 9px;
  font-weight: bold;
  color: #d482b5;
}
.login-btn {
  margin-top: 23px;
  width: 100%;
  height: 50px;
  background-color: #d482b5;
  font-size: 18px;
  border-radius: 30px;
  border-style: none;
}

/deep/ .el-form-item__label {
  text-align: left;
  color: #666;
}

/deep/ .el-form-item__error {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #ff6f6f;
  letter-spacing: 0;
}

.login-smscode-item >>> .el-form-item__content {
  line-height: 45px;
}

.login-smscode-item:after {
  clear: both;
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.login-smscode-input {
  display: inline-block;
  width: 150px !important;
}

.login-smscode-box {
  display: inline-block;
  float: right;
}

.login-smscode-box /deep/ canvas {
  height: 40px;
}

.login-box >>> .el-input__inner:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-text-fill-color: #606266 !important;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
  background-color: transparent;
  background-image: none;
  transition: background-color 50000s ease-in-out 0s;
}

.login-box >>> .el-input__inner {
  background-color: transparent;
}

.el-form-item >>> .el-form-item__error {
  display: none;
}

.el-form-item >>> .el-form-item__content {
  margin-left: 0 !important;
}

@media (max-width: 1440px) {
  .login-box {
    padding-bottom: 50px;
  }
}
</style>
