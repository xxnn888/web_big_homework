<template>
  <div class="ye3">
    <div class="box">
      <div id="main"></div>
      <div id="main2"></div>
    </div>
    <div class="con">
      <el-calendar v-model="value" class="cal">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
            slot="dateCell"
            slot-scope="{date, data}">
          <p>
            {{ data.day.split('-').slice(1).join('-') }}<br/>
            <span style="color:red;">{{ my_date(data.day) }}
            </span>
          </p>
        </template>
      </el-calendar>
    </div>
    <div class="pic">

    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      sj: [],
      data: new Date(),
      res_date: [
        {"date": this.data, "content": "当前日期"},
        {"date": "2023-06-10", "content": "提交web作业"},
        {"date": "2023-06-17", "content": "英语四级"},
        {"date": "2023-06-18", "content": "数据库"},
        {"date": "2023-06-19", "content": "java程序设计"},
        {"date": "2023-06-20", "content": "离散数学"},
        {"date": "2023-06-21", "content": "马克思主义原理"}
      ],
      timeValue: "",
    };
  },
  methods: {
    my_date(v) {
      console.log(v)
      let len = this.res_date.length
      let res = ""
      for (let i = 0; i < len; i++) {
        if (this.res_date[i].date == v) {
          res = this.res_date[i].content
          break
        }
      }
      return res
    },
  },
  mounted() {
    // 圆柱
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "掌握技能圆柱图",
        left: "center",
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "category",
        data: ["HTML", "CSS", "JS", "Vue", "Uniapp"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [100, 200, 150, 80, 70],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    option && myChart.setOption(option);

    // 折线
    var chartDom2 = document.getElementById("main2");
    var myChart2 = echarts.init(chartDom2);
    var option2;

    option2 = {
      title: {
        text: "掌握技能折线图",
        // subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "category",
        data: ["HTML", "CSS", "JS", "Vue", "Uniapp"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 1190, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
    option2 && myChart2.setOption(option2);

    let arr = [];
    let arr2 = [];
    setInterval(() => {
      var s = Math.round(Math.random() * 200);
      arr.push(s);
      arr2.push(Math.round(Math.random() * 1500));
      if (arr.length >= option.series[0].data.length) {
        option.series[0].data = arr;
        option2.series[0].data = arr2;
        // console.log(option.series[0].data, arr);
        arr = [];
        arr2 = [];
        option && myChart.setOption(option);
        option2 && myChart2.setOption(option2);
      }
    }, 1000);
  },
};
</script>

<style scoped lang="less">
.is-selected {
  color: #1989FA;
}

.box {
  display: flex;
  padding: 50px 50px 0 50px;
  justify-content: space-between;
}

#main,
#main2 {
  width: 500px;
  height: 500px;
}

.con .el-calendar-table .el-calendar-day {
  padding: 32px;
}

.preview {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 100%;
  max-height: 100%;
}
</style>
