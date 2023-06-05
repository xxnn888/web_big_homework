<template>
  <el-carousel height="94vh" :interval="1500" arrow="never" :autoplay="true" trigger="click" id="banner">
    <el-carousel-item v-for="(item,key) in banner" :style="item.bgi" :key="key">
      <div class="h1">{{ item.h1 }}</div>
      <div class="h2">{{ item.h2 }}</div>
      <button class="button" @click="$message.error('功能正在开发中')">{{ item.button1 }}</button>
      <button class="button" @click="$message.error('功能正在开发中')" v-if="item.button2">{{ item.button2 }}</button>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "ty",
  data() {
    return {
      banner: [
        {
          h1: "六亿人的选择",
          h2: "钉钉，让让进步发生",
          button1: "下载钉钉",
          bgi: "background: url(\"https://img.alicdn.com/imgextra/i4/O1CN01oBcFSK1S29Qejtc9m_!!6000000002188-0-tps-2496-1690.jpg\") 50% 10%;"
        },
        {
          h1: "智能协同之春",
          h2: "2023春季顶峰会",
          button1: "立即查看",
          button2: "探索加入",
          bgi: "background: url(\"https://img.alicdn.com/imgextra/i1/O1CN01NAN2fN1Li6OGAXJrH_!!6000000001332-0-tps-1920-1300.jpg\") 50% 10%;"
        },
        {
          h1: "一站式企业迁移解决方案",
          h2: "企业数字资产迁移，顺畅无忧",
          button1: "立即查看",
          bgi: "background: url(\"https://gw.alicdn.com/imgextra/i1/O1CN0142Y4z11F6eIqqbhk6_!!6000000000438-2-tps-2880-1950.png\") 50% 10%;"
        },
        {
          h1: "阿里邮箱-钉钉融合版",
          h2: "钉+邮深度融合，随时随地助力企业高效办公",
          button1: "立即查看",
          bgi: "background: url(\"https://gw.alicdn.com/imgextra/i3/O1CN016iHrKt1ZG4kO5x4v4_!!6000000003166-0-tps-2880-1950.jpg\") 50% 10%;"
        },
        {
          h1: "钉钉专业版",
          h2: "满足中小企业数字化升级需求，灵活开放的数字化生产力平台",
          button1: "立即预约",
          bgi: "background: url(\"https://img.alicdn.com/imgextra/i4/O1CN01s8JxOf1V3TNzvE1GG_!!6000000002597-2-tps-1920-1300.png\") 50% 10%;"
        },
        {
          h1: "钉钉专属版",
          h2: "企业专属、安全、开放的数字化办公",
          button1: "立即预约",
          bgi: "background: url(\"https://img.alicdn.com/imgextra/i1/O1CN014Hs5IE1ufowO6QL7p_!!6000000006065-2-tps-2496-1690.png\") 50% 10%;"
        }
      ]
    }
  }
}
</script>

<style scoped>
#banner >>> .el-carousel__indicators--horizontal {
  top: 53%;
  left: 20%;
}

#banner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  color: white;
  font-family: PingFangSC-Medium, sans-serif;
}

#banner .h1 {
  margin-top: 5%;
  font-size: 64px;
  font-weight: 500;
  line-height: 80px;
  margin-left: 10%;
}

.h2 {
  font-size: 20px;
  margin-top: 3%;
  margin-left: 10%;
}

.button {
  height: 44px;
  color: rgb(0, 127, 255);
  font-size: 18px;
  border-radius: 9px;
  cursor: pointer;
  width: 116px;
  margin-top: 3%;
  margin-left: 10%;
  margin-bottom: 3%;
}

.button:hover {
  background-color: rgb(234, 236, 237);
}

.cart {
  background-color: rgba(204, 204, 204, 0.2);
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
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
  opacity: 0.9;
  transition: all 300ms ease-in;
}
</style>
