<template>
  <div class="cart">
    <div class="cart-item">
      <img src="https://img.alicdn.com/imgextra/i2/O1CN01MpKOZN1vg6nRxNuoH_!!6000000006201-2-tps-280-280.png" alt=""
           width="208" height="200">
      <div class="font1">视频会议</div>
      <div class="font2">让高效会议自然发生</div>
      <div class="font3">加入会议</div>
    </div>
    <div class="cart-item">
      <img src="https://img.alicdn.com/imgextra/i1/O1CN01oxgmBU215MiQI1Uc3_!!6000000006933-2-tps-280-280.png" alt=""
           width="208" height="200">
      <div class="font1">钉钉塔</div>
      <div class="font2">使用低代码宜搭，快速解决工作问题</div>
      <div class="font3">创建应用</div>
    </div>
    <div class="cart-item">
      <img src="https://img.alicdn.com/imgextra/i1/O1CN013ZfoHw22KJFv7VdX1_!!6000000007101-2-tps-280-280.png" alt=""
           width="208" height="200">
      <div class="font1">Teambition</div>
      <div class="font2">Teambition轻松完成工作事</div>
      <div class="font3">创建项目</div>
    </div>
    <div class="cart-item">
      <img src="https://img.alicdn.com/imgextra/i3/O1CN01iGHrC31kXtvTsd3iF_!!6000000004694-2-tps-280-280.png" alt=""
           width="208" height="200">
      <div class="font1">钉钉文档</div>
      <div class="font2">活的文档，链接万物</div>
      <div class="font3">立即使用</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  mounted() {
    let li = document.querySelector('.cart').querySelectorAll(".cart-item");
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = () => {
        this.$message.error("该功能尚在开发中,点击暂无反应")
      }
    }
  }
}
</script>

<style scoped>
.cart {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  width: 100%;
  background-color: rgba(204, 204, 204, 0.2);
  display: flex;
  justify-content: center;
  padding-bottom: 1%;
  overflow: hidden;
}


.cart .cart-item {
  position: relative;
  border: 1.5px solid #fff;
  border-radius: 8px;
  height: 140px;
  overflow: hidden;
  padding-left: 24px;
  padding-top: 16px;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  width: 250px;
  text-align: left;
  background-color: rgba(212, 228, 254, 0.7);
  margin: 3% 1%;

}

.font1 {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  font-weight: 500;
//margin-bottom: 4px;
}

.font2 {
  color: rgba(23, 26, 29, .6);
  font-size: 14px;
  margin-bottom: 18px;
  margin-top: 4px;
}

.font3 {
  align-items: center;
  background-color: hsla(0, 0%, 100%, .4);
  border: 1px solid hsla(210, 7%, 53%, .24);
  border-radius: 6px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-weight: 400;
  height: 32px;
  -webkit-justify-content: center;
  justify-content: center;
  width: 76px;
  cursor: pointer;
}

.cart-item img {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 128px;
  top: 45px;
  z-index: 1;
  opacity: 0;
}


.cart .cart-item:hover img {
  opacity: 1;
  transition: all 300ms ease-in;
}
</style>
