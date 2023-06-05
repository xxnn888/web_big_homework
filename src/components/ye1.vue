<template>
  <div class="ye1">
    <h2>个人简历</h2>
    <div class="div1">
      <el-image fit="contain"
                style="width: 90px; height: 90px"
                src="https://cdn.xxnn808.top/83c99fe914f66851c7a41b3814ed11d.jpg">
      </el-image>
      <span><i class="el-icon-user-solid"></i>姓名：徐肖</span>
      <span><i class="el-icon-star-on"></i>年龄：21</span>
      <span><i class="el-icon-phone"></i>电话：18182976697</span>
      <span class="el-icon-paperclip">邮箱：1521891733@qq.com</span>
    </div>

    <div class="box1">
      <h3 class="mt20" style="margin-bottom: 16px">教育经历</h3>
      <div class="div2 mt10 p4em" style="margin: 10px 0">
        <div>
          <el-tag>2021.09-xxxx.xx</el-tag>
        </div>
        <div class="fontw">
          <el-button type="warning" icon="el-icon-school" @click="jump">
            江西理工大学
          </el-button>
        </div>
        <div>
          <el-tag>软件工程学院</el-tag>
          / <span><el-tag type="success">本科</el-tag></span></div>
      </div>
      <el-steps :active="8">
        <el-step title="2021年12月" description="普通话水平测试二级二等"></el-step>
        <el-step title="2022年4月" description="江西理工大学第一届程序设计竞赛二等奖"></el-step>
        <el-step title="2022年5月" description="江西理工大学三等奖学金"></el-step>
        <el-step title="2022年10月" description="第四届全国大学生算法设计与编程挑战赛（秋季赛）优秀奖"></el-step>
        <el-step title="2022年10月" description="江西理工大学软件工程学院万行代码挑战活动最佳骏码奖"></el-step>
        <el-step title="2022年12月" description="国家励志奖学金"></el-step>
        <el-step title="2022年12月"
                 description="第五届传智杯全国大学生IT技能大赛程序设计赛道全国区域赛二等奖"></el-step>
        <el-step title="2022年12月"
                 description="第五届传智杯全国大学生IT技能大赛Web前端赛道全国区域赛二等奖"></el-step>
        <el-step title="2023年7月"
                 description="找到实习"></el-step>
      </el-steps>
      <div class="h2">
        <h3>个人介绍</h3>
        <p style="text-indent: 2rem">
          徐肖：软件工程学院软件开发211班，现智能网络工作室前端一队主要开发人员，前端基础扎实， 熟练应用常见的前端框架并掌握其原理，有组件化
          的思想，担当且创新； 较强的学习能力和适应能力，良好的独立分析解决问题能力和逻辑分析思维； 良好的团队沟通协作力和服务意识，较强的工
          作执行力和抗压能力，具有良好的团队合作意识。
        </p>
      </div>
    </div>

    <div class="box2 mt20">
      <h3 style="margin: 10px 0">个人技能</h3>
      <div class="p4em div3 mt10">
        <ul>
          <li>精通 <span class="lan"></span></li>
          <li>熟练 <span class="lv"></span></li>
          <li>熟练 <span class="cheng"></span></li>
          <li>熟悉 <span class="hong"></span></li>
        </ul>
      </div>
      <div id="main" width="500" height="500" ref="box"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    jump() {
      window.open('https://www.jxust.edu.cn/')
    },
    handleChange(val) {
      console.log(val);
    },
  },
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      title: {
        text: "个人技能",
        // subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            {
              value: 1000,
              name: "HTML CSS JavaScript JSON Ajax ES6 Echarts等技术",
            },
            {
              value: 800,
              name: "vue vue-router axios等vue全家桶"
            },
            {
              value: 800,
              name: "JQuery uniapp Bootstrap Element-ui等前端框架",
            },
            {
              value: 400,
              name: "webpack GitHub vite等前端构建化工具 后端语言：Node.js java mySQL",
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style scoped lang="less">
.ye1 {
  h2 {
    margin-top: 20px;
  }

  h3 {
    text-align: left;
  }

  .div1 {
    margin-top: 10px;

    span {
      margin: 0 20px;
    }
  }

  .box1,
  .box2,
  .box3 {
    padding: 0 10px;
    text-align: left;

    .div2 {
      display: flex;
      justify-content: space-between;
    }

    .div3 {
      ul {
        display: flex;

        li {
          span {
            display: inline-block;
            margin-right: 20px;
            width: 30px;
            height: 15px;
            vertical-align: middle;
            border-radius: 5px;
          }

          .lan {
            background-color: #5a75c8;
          }

          .lv {
            background-color: #91cc75;
          }

          .cheng {
            background-color: #fac858;
          }

          .hong {
            background-color: #ee6666;
          }
        }
      }
    }
  }
}

#main {

  margin-top: 20px;
  width: 800px;
  height: 500px;
}
</style>
