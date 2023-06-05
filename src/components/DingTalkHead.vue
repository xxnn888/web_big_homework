<template>
  <div>
    <div class="head">
      <div class="img">
        <img src="@/assets/image-removebg-preview.png" alt="" height="50px">
      </div>
      <div class="container">
        <ul class="Nav">
          <li @mouseover="mouseenter" @mouseleave="mouseout">
            <Prduce v-show="display" class="pos"></Prduce>
            <a href="#">产品功能<i class="el-icon-arrow-down"></i></a>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">解决方案<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>零售</el-dropdown-item>
                <el-dropdown-item>制造</el-dropdown-item>
                <el-dropdown-item>金融</el-dropdown-item>
                <el-dropdown-item>医疗</el-dropdown-item>
                <el-dropdown-item>交通</el-dropdown-item>
                <el-dropdown-item>高校</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li @click="$message.success('开发中')"><a href="#">客户案例</a></li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">开放平台<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>了解开放平台</el-dropdown-item>
                <el-dropdown-item>钉钉Paas</el-dropdown-item>
                <el-dropdown-item>文档&帮助</el-dropdown-item>
                <el-dropdown-item>开发者社区</el-dropdown-item>
                <el-dropdown-item>生态&合作</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">了解钉钉<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮助中心</el-dropdown-item>
                <el-dropdown-item>新闻资讯</el-dropdown-item>
                <el-dropdown-item>钉钉培训</el-dropdown-item>
                <el-dropdown-item>云钉一体</el-dropdown-item>
                <el-dropdown-item>钉钉发布会</el-dropdown-item>
                <el-dropdown-item>新功能推荐</el-dropdown-item>
                <el-dropdown-item>广告合作</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li  @click="$message.success('开发中')"><a href="#">增值服务</a></li>
        </ul>
      </div>
      <div class="button">
        <ul class="NavButton">
          <li>
            <button @click="go">加入会议</button>
          </li>
          <li>
            <button @click="show">了解钉钉</button>
          </li>
          <li>
            <button id="downland" @click="download">下载钉钉</button>
          </li>
          <li>
            <button @click="go">登录</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Prduce from "@/components/Prduce.vue";

export default {
  name: "Body",
  components: {Prduce},
  data() {
    return {
      display: false,
    }
  },
  mounted() {
  },
  methods: {
    mouseenter() {
      this.display = true
    },
    mouseout() {
        this.display = false


    },
    show() {
      this.$alert('功能尚在开发中', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    },
    download() {
      this.$router.push("/download")
    },
    go() {
      this.$router.push("/Login")
    }
  }
}
</script>

<style scoped>
.pos {
  position: absolute;
  top: 100%;
  left: 18%;
  animation: change 0.4s;
  z-index: 999999;
}

@keyframes change {
  0% {
    opacity: 0;
    transform: translate(200px, -200px)
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2, 1.2);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.head {
  position: fixed;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-family: "PingFangSC-Regular", "Microsoft YaHei", "Open Sans", Arial,
  "Hiragino Sans GB", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun,
  sans-serif;
}

.img {
  width: 15%;
  height: 50px;
}

.container {
  width: 40%;
  height: 50px;
  line-height: 50px;
}

.container .Nav {
  display: flex;
  justify-content: space-around;
  height: 50px;
}

.container .Nav .el-dropdown {
  font-size: 16px;
  font-family: "PingFangSC-Regular", "Microsoft YaHei", "Open Sans", Arial,
  "Hiragino Sans GB", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun,
  sans-serif;
}

.container .Nav li:hover {
  color: #0f80f1;
}

.container .Nav .el-dropdown-link:hover {
  color: #0f80f1;
}

.button {
  width: 30%;
  line-height: 50px;
}

.button .NavButton {
  display: flex;
  justify-content: space-around;
}

.button .NavButton li button {
  width: 88px;
  height: 36px;
  line-height: 34px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  color: #171a1d;
  background-color: #ffffff;
  border: 1px solid rgba(126, 134, 142, 0.24);
}

#downland {
  background-color: #0089ff;
}

#downland:hover {
  color: black;
}

.button .NavButton li button:hover {
  background-color: #eff0f1;
  color: #007fff;
}
</style>
