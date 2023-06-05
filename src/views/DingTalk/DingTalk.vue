<template>
  <div>
    <header>
      <MyBody></MyBody>
    </header>
    <div class="container-wraper"><!--动画区域-->
      <div class="ani-container"><!--视口-->
        <ul class="list">
          <li order="0" class="item"><img src="@/assets/1-160-160.png" alt="">
            <p>即时沟通</p></li>
          <li order="1" class="item"><img src="@/assets/2-160-160.png" alt="">
            <p>组织</p></li>
          <li order="2" class="item"><img src="@/assets/3-160-160.png" alt="">
            <p>智能人事</p></li>
          <li order="3" class="item"><img src="@/assets/4-160-160.png" alt="">
            <p>组织大脑</p></li>
          <li order="2" class="item"><img src="@/assets/5-160-160.png" alt="">
            <p>OA审批</p></li>
          <li order="1" class="item"><img src="@/assets/6-160-160.png" alt="">
            <p>邮箱</p></li>
          <li order="0" class="item"><img src="@/assets/7-160-160.png" alt="">
            <p>Teambition</p></li>
          <li order="0" class="item"><img src="@/assets/8-160-160.png" alt="">
            <p>文档</p></li>
          <li order="1" class="item"><img src="@/assets/9-160-160.png" alt="">
            <p>音视频会议</p></li>
          <li order="2" class="item"><img src="@/assets/10-160-160.png" alt="">
            <p>开放平台</p></li>
          <li order="3" class="item"><img src="@/assets/11-160-160.png" alt="">
            <p>宜搭</p></li>
          <li order="2" class="item"><img src="@/assets/12-160-160.png" alt="">
            <p>钉闪会</p></li>
          <li order="1" class="item"><img src="@/assets/13-160-160.png" alt="">
            <p>连接器</p></li>
          <li order="0" class="item"><img src="@/assets/14-160-160.png" alt="">
            <p>酷应用</p></li>
        </ul>
      </div>
      <div class="logo">
        <div>
          <img src="@/assets/logo-180-180.svg" alt="" width="180" height="180">
        </div>
        <div>
          <img src="@/assets/font-397-52.svg" alt="">
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <MyfFooter></MyfFooter>
      </div>
    </footer>
  </div>
</template>

<script>
import Myhead from "@/components/Myhead.vue";
import MyBody from "@/views/DingTalk/MyBody.vue";
import MyfFooter from "@/views/DingTalk/MyfFooter1.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "DingTalk",
  components: {Bottom, MyfFooter, MyBody, Myhead},
  data() {
    return {
      propObj: new Map(),
    }
  },
  mounted() {
    this.fillPropToObj()
    window.addEventListener('scroll', this.updateStyleAttr)
    let li = document.querySelector('.list').querySelectorAll('li')
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = () => {
        this.$message.error("该功能尚在开发中,暂时不能点击")
      }
    }
  },
  methods: {
    ert() {
      this.$router.go(0)
    },
    updateStyleAttr() {
      for (const [dom, value] of this.propObj) {
        Object.keys(value).forEach(prop => {
          dom.style[prop] = value[prop](window.scrollY)
          // console.log(prop, value[prop](window.scrollY));
        })
      }
    },
    fillPropToObj() {
      //节点以及对应的样式属性
      const items = document.querySelectorAll('.item')
      const containerWraper = document.querySelector('.container-wraper')
      const list = document.querySelector('.list')
      this.propObj.clear()
      const containerWraperRect = containerWraper.getBoundingClientRect()// 获取容器位置以及几何信息
      const minX = containerWraperRect.top + window.scrollY // 容器containerWraper触摸到顶部，开始有变化
      const maxX = containerWraperRect.bottom + window.scrollY - window.innerHeight // 容器containerWraper底部触摸到可视窗口底部开始不再变化
      items.forEach(dom => {
        this.propObj.set(dom, getDomStylePropValue(dom, minX, maxX))
      })

      function fx(minX, maxX, minY, maxY) {
        return function (x) {
          if (x < minX) {
            return minY
          }
          if (x > maxX) {
            return maxY
          }
          // 类似函数y = kx + b
          return ((maxY - minY) / (maxX - minX)) * (x - minX) + minY
        }
      }

      function getDomStylePropValue(dom, minX, maxX) {
        // 添加顺序，不同的x决定y的变化
        minX = minX + dom.getAttribute('order') * 300
        const opacity = fx(minX, maxX, 0, 1)
        const scale = fx(minX, maxX, 0, 1)
        const tx = fx(minX, maxX, list.clientWidth / 2 - dom.offsetLeft - dom.clientWidth / 2, 0)
        const ty = fx(minX, maxX, list.clientHeight / 2 - dom.offsetTop - dom.clientHeight / 2, 0)
        const transform = function (x) {
          return `translate(${tx(x)}px, ${ty(x)}px) scale(${scale(x)})`
        }
        return {opacity, transform}
      }
    },
  }
}
</script>

<style scoped>

.ani-container .list img {
  width: 80px;
  height: 80px;
  border-radius: 20px
}

.ani-container .list p {
  margin-top: 10px;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

ul {
  margin: 0;
  padding: 0;
}

header, footer {
  height: 100vh;
  text-align: center;
  background-color: rgb(228, 241, 254);
}

.container-wraper {
  height: 300vh;
  background-color: #000;
  position: relative;
}

.container-wraper .ani-container {
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
}

.container-wraper .ani-container .list {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 980px;
  position: relative;
}

.container-wraper .ani-container .list .item {
  width: 80px;
  height: 80px;
  margin: 60px 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}


.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  width: 100%;
  background-color: rgb(228, 241, 254);

}

</style>
