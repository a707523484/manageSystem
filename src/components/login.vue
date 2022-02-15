<template>
  <el-form
    :model="form"
    :rules="rules"
    class="login-container"
    label-width="100px"
  >
    <h3 class="login-title">系统登录</h3>
    <el-form-item
      label="用户名"
      label-width="80px"
      prop="username"
      class="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" class="password">
      <el-input
        type="input"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login_submit" style="margin-left: 0px;">
      <el-button type="primary" @click="login" class="login_submit"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form:
        {
          username:'',
          password:''
        }
      ,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度不小于3位", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      if(this.form.username=='admin' && this.form.password=='admin'){
        this.$store.commit("showMain");
        this.$router.push("/");
      }
      else if(this.form.username=='user' && this.form.password=='user'){
        this.$store.commit("showMain");
        this.$store.commit("showMenuUser");
        this.$router.push("/");
      }
      else{
        alert("账号或密码错误")
      }
    },
  },
};
</script>

<style>
.login-container{
  border-radius:15px ;
  box-shadow: 0 0 25px;
  margin:180px auto;
  padding:35px 35px 15px 35px;
  width: 350px;
}

.login_submit{
  display: flex;
  justify-content: center;
  
}

.login-title{
  color: black;
}


.login-container /deep/ .el-form-item__content{
  margin-left: 0px;
}
</style>