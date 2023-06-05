<template>
  <div class="container">
    <div class="one" v-show="show">
      <img src="@/assets/right-top-204-204.png" v-show="show" alt="" class="pos" width="150" @click="change">
      <img src="@/assets/logo2.png" alt="" width="50px" height="45px">
      <h3>使用钉钉扫码</h3>
      <p>继续使用钉钉管理后台</p>
      <img src="@/assets/money.png" alt="" width="205px">
      <br>
      <el-radio v-model="radio" label="1" style="margin-top: 10px">自动登录</el-radio>
      <ul class="list">
        <li>企业账号</li>
        <li>注册账号</li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              简体中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu v-slot="dropdown">
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
              <el-dropdown-item>日本语</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <div class="one" v-show="!show">
      <img src="@/assets/right-top2-204-204.png" v-show="!show" alt="" class="pos" width="150" @click="change">
      <img src="@/assets/logo2.png" alt="" width="50px" height="45px">
      <h3>登录钉钉</h3>
      <p>继续使用钉钉管理后台</p>
      <el-input placeholder="请输入内容" style="margin: 40px 0 " v-model="input1">
        <template slot="prepend">+86</template>
      </el-input>
      <el-button style="width: 60%" type="primary" @click="login">下一步</el-button>
      <div>
        <el-radio v-model="radio" label="1" style="margin: 29px">自动登录</el-radio>
      </div>
      <div class="radio">
        <input type="radio" name="" id=""> 我已阅读并同意隐私政策、服务协议
      </div>
      <ul class="list">
        <li>企业账号</li>
        <li>注册账号</li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              简体中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu v-slot="dropdown">
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
              <el-dropdown-item>日本语</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      radio: "",
      show: true,
      input1: "18182976697"
    }
  },
  methods: {
    change() {
      this.show = !this.show
    },
    login() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.$message.success("登录成功")
      }, 1000);
    }

  }
}
</script>

<style scoped>
.el-input-group {
  width: 59%;
}

.radio {
  line-height: 14px;
  font-size: 14px;
  color: rgba(23, 26, 29, 0.6);
  cursor: pointer;
}

.pos {
  position: absolute;
  top: 2px;
  right: 2px;
}

.container {
  border: 1px solid #ffffff;
  text-align: center;
}

.container .one {
  width: 35%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% auto 0;
  transition: all 2s linear;
}

h3 {
  margin: 10px auto 0;
  line-height: 30px;
  font-size: 20px;
  color: #171a1d;
  text-align: center;
  font-weight: bold;
}

p {
  margin-top: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

.list {
  display: flex;
}

.list li {
  width: 200px;
  margin-top: 20px;
}

.list li {
  line-height: 20px;
  font-size: 14px;
  vertical-align: middle;
  color: rgba(23, 26, 29, 0.6);
  transition: all 0.3s;
  cursor: pointer;
}
</style>
