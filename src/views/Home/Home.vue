<template>
  <div>
    <myhead></myhead>
    <div class="container">
      <div class="align-center">
        <h1 class="hero-title">XuXiao</h1>
        <div class="text-white">徐肖的个人开发网站，让web开发更迅速、简单。</div>
      </div>
      <div class="cart">
        <div class="cart-item " @click="keyboard">
          <img style="width: 300px;height: 150px;margin: 18px 0;" src="@/assets/image2-removebg-preview.png" alt="">
          <h4>keyboard</h4>
          <p>
            一个简约的键盘布局,运用HTML CSS实现,赛博朋克风格，点击键盘后还能实时响应，
          </p>
          <p class="check">点击即可查看</p>
        </div>
        <div class="cart-item" @click="DingTalk">
          <img id="img" src="@/assets/image-removebg-preview.png" alt="">
          <h4>钉钉官网</h4>
          <p>
            引领未来新一代工作方式,将陪伴每一个企业成长,是数字经济时代的企业组织协同办公和应用开发平台,是新生产力工具。
          </p>
          <p class="check">点击即可查看</p>
        </div>
        <div class="cart-item" @click="MyInfo">
          <img src="@/assets/ced9e2d007d6904a39125210a9af038a-removebg-preview (1).png" alt="">
          <h4>徐肖</h4>
          <p>
            你的mg偷走了我的zn，特斯拉穿过平面，编织成一个又一个韦伯，安培穿过欧姆，寻找着法拉，充电到一个福特，电源已断，我已库伦之名涌出，化为焦耳，烟消云散
          </p>
          <p class="check">点击即可查看</p>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import VanillaTilt from 'vanilla-tilt';

import myhead from "@/components/Myhead.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "home",
  components: {Bottom, myhead},
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".cart-item"), {
      max: 20,
      speed: 500
    });
  },
  methods: {
    keyboard() {
      this.$router.push("/keyboard")
    },
    DingTalk() {
      this.$router.push("/DingTalk")
    },
    MyInfo() {
      this.$router.push("/ye1")
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  background: url("@/assets/home-bg.png");
  background-color: #ccc;
  background-size: 100% 100%;
  align-content: center;

}

.align-center {
  position: absolute;
  top: 19%;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 6.25rem;
  line-height: 1;
  margin-bottom: 10px;
}

.text-white {
  font-size: 1.25rem;
  font-weight: 300;
}

button {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  color: white;
  font-size: 30px;
  background-color: #42b883;
}

.cart {
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.cart-item {
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);

  border-radius: 20px;
  padding: 5px 20px;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.cart-item:hover {
  height: 300px;
}

.cart-item img {
  width: 150px;
  height: 150px;
  transform: translateZ(50px);
}

#img {
  width: 300px;
  height: 150px;
  margin: 23px 0;
}

.cart-item h4 {
  color: black;
  font-weight: bold;
  margin: 0;
  transform: translateZ(50px);
}

.cart-item p {
  text-indent: 2rem;
  color: black;
}

.cart-item .check {
  font-size: 18px;
  font-family: 楷体, serif;
  font-weight: 700;
  color: #174b4b;
  text-align: center;
  margin-bottom: 2px;
  text-indent: 0;
}
</style>
