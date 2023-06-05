<template>
  <div class="container">
    <h1>6亿用户的选择人人喜爱的协作工具</h1>
    <div class="ul">
      <ul id="trans">
        <li class="select" ref="passage" @click="change1">内容创作</li>
        <li @click="change2" ref="project">项目创作</li>
        <li @click="change3" ref="knowledge">知识整理</li>
        <li @click="change4" ref="meeting">高效会议</li>
      </ul>
    </div>


    <div class="one" v-show="show1">
      <div class="left">
        <div style="display: flex">
          <img src="@/assets/1-32-32.svg" width="20" alt="">
          <span style="line-height: 20px;margin-left: 2%">钉钉文档</span>
        </div>
        <h2 class="text">内容创作与知识管理平台</h2>
        <el-button type="primary" round class="bu">立即使用</el-button>
        <div style="height: 260px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="流畅编辑，沉浸创作" description="流畅编辑，沉浸创作输入“/”立刻唤起50+种插入形式"></el-step>
            <el-step title="连接人和文档，高效协作" description="文档中“@”协作伙伴，快速触达"></el-step>
            <el-step title="多种方式，精彩分享" description="文档秒变PPT；支持生成长图/视频"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/footer1-1560-959.png" alt="" height="420">
      </div>
    </div>


    <div class="one" v-show="show2">
      <div class="left">
        <div style="display: flex">
          <img src="@/assets/2-32-32.svg" width="20" alt="">
          <span style="line-height: 20px;margin-left: 2%">Teambition</span>
        </div>
        <h2 class="text">项目协作，简单好用</h2>
        <el-button type="primary" round class="bu">立即使用</el-button>
        <div style="height: 260px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="强大的项目视图" description="项目进度一览无余，随时随地知晓信息"></el-step>
            <el-step title="协作管理闭环" description="轻松构建协作，统计分析，把控全局"></el-step>
            <el-step title="聚合的任务协作" description="承载所有信息，任务跟进有始有终"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/footer2-1556-956.png" alt="" height="420">
      </div>
    </div>


    <div class="one" v-show="show3">
      <div class="left">
        <div style="display: flex">
          <img src="@/assets/3-32-32.svg" width="20" alt="">
          <span style="line-height: 20px;margin-left: 2%">知识库</span>
        </div>
        <h2 class="text">知识沉淀，井井有条</h2>
        <el-button type="primary" round class="bu">立即使用</el-button>
        <div style="height: 260px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="零散文件，统一沉淀" description="文件、日志、闪会一键保存至知识库"></el-step>
            <el-step title="整理方便，清晰呈现" description="用书本目录方式整理文档，一目了然"></el-step>
            <el-step title="全局搜索，快速查找" description="输入关键词，快速找到所需文档"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/footer3-1558-958.png" alt="" height="420">
      </div>
    </div>


    <div class="one" v-show="show4">
      <div class="left">
        <div style="display: flex">
          <img src="@/assets/4-64-64.png" width="20" alt="">
          <span style="line-height: 20px;margin-left: 2%">钉闪会</span>
        </div>
        <h2 class="text">少开会，开好会，开会就用钉闪会</h2>
        <el-button type="primary" round class="bu">立即使用</el-button>
        <div style="height: 260px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="会前有准备" description="海量会议模板，提前填报议题"></el-step>
            <el-step title="会中有聚焦" description="划词评论聚焦问题，计时器有效控时"></el-step>
            <el-step title="会后有跟进" description="会议待办责任到人，进展清晰明确"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/footer4-1560-960.png" alt="" height="420">
      </div>
    </div>
  </div>
</template>

<script>
import Bottom from "@/components/Bottom.vue";

export default {
  name: "MyfFooter1",
  components: {Bottom},
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
    }
  },
  mounted() {
    document.querySelectorAll(".bu").forEach((item) => {
      item.onclick = () => {
        this.$message.error("尚在开发中")
      }
    })
    // let li = document.querySelector('#trans').querySelectorAll('li')
    // for (let i = 0; i < li.length; i++) {
    //   let styleIndex = 0;
    //   let timer = setInterval(() => {
    //     if (styleIndex >= 3) {
    //       clearInterval(timer)
    //     } else {
    //       styleIndex++;
    //     }
    //     switch (styleIndex) {
    //       case 0:
    //         this.change1()
    //         break;
    //       case 1:
    //         this.change2()
    //         break;
    //       case 2:
    //         this.change3()
    //         break;
    //       case 3:
    //         this.change4()
    //         break;
    //     }
    //   }, 1000)
    // }
  },
  methods: {
    change1() {
      this.$refs.passage.classList.add("select");
      this.$refs.project.classList.remove("select")
      this.$refs.knowledge.classList.remove("select")
      this.$refs.meeting.classList.remove("select")
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    },
    change2() {
      this.$refs.passage.classList.remove("select");
      this.$refs.project.classList.add("select")
      this.$refs.knowledge.classList.remove("select")
      this.$refs.meeting.classList.remove("select")
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
    },
    change3() {
      this.$refs.passage.classList.remove("select");
      this.$refs.project.classList.remove("select")
      this.$refs.knowledge.classList.add("select")
      this.$refs.meeting.classList.remove("select")
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
    },
    change4() {
      this.$refs.passage.classList.remove("select");
      this.$refs.project.classList.remove("select")
      this.$refs.knowledge.classList.remove("select")
      this.$refs.meeting.classList.add("select")
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
    },

  }

}
</script>

<style scoped>
.container {
  padding: 2% 0;
}

.container h1 {
  margin-top: 2%;
  white-space: pre-wrap;
  font-size: 48px;
  color: rgb(23, 26, 29);
  font-family: PingFangSC-Medium, monospace;
  font-weight: 500;
  min-width: 750px;
  position: relative;
  text-align: center;
  user-select: none;
}

.ul {
  margin-top: 2%;
}

.ul ul {
  color: black;
  display: flex;
  justify-content: center;
}

.ul ul li {
  border-radius: 20px;
  cursor: pointer;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  font-weight: 500;
  height: 30px;
  line-height: 30px;
  padding: 8px 30px;
  -webkit-transition: color .5s;
  -moz-transition: color .5s;
  transition: color .5s;
  z-index: 1;
}

.select {
  background-color: black;
  border-radius: 10px;
  color: white;
  transform: scale(1.1, 1.1);
}

.left {
  text-align: left;
}

.text {
  margin: 4% 0;
}

.bu {
  margin-bottom: 4%;
}

.one {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
}
</style>
