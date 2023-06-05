<template>
  <div class="ye2">
    <section class="project info-unit">
      <h2 style="text-align: center ;margin: 10px 0">
        <i class="el-icon-s-promotion"></i>个人项目</h2>
      <hr/>
      <ul>
        <li style="margin: 20px 0">
          <h3 class="h3">
            <span>[项目1]yeb后台管理系统</span>
            <span class="link">
              <a href="#" target="_blank">Demo</a>
            </span>
            <time class="time">2022.04-2022.9</time>
          </h3>
          <ul class="info-content">
            <li>技术栈：Vue Vuex element-ui axios</li>
            <li>
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              [目标]实现企业员工的后台管理系统
              <br/>
              <i class="fa fa-users" aria-hidden="true"></i>
              [团队]同 1 位同学
              <br/>
              <i class="fa fa-bars" aria-hidden="true"></i>
              [贡献] 主要负责前端部分页面的开发，使用ElementUI进行布局，对企业员工中的数据进行展示，以及增删改查，
              <br/>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              [效果] 获得了老师的认可
            </li>
          </ul>
        </li>
        <li style="margin: 20px 0">
          <h3 class="h3">
            <span>[项目2]数据可视化</span>
            <span class="link">
                                <a href="#" target="_blank">Demo</a>
                            </span>
            <time class="time">2022.10-2013.1</time>
          </h3>
          <ul class="info-content">
            <li>技术栈：HTML 5+D3.js+ECharts+MySQL</li>
            <li>
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              [目标]多维度可视化展示、数据透视及分析
              <br/>
              <i class="fa fa-users" aria-hidden="true"></i>
              [团队]与 1 位同学
              <br/>
              <i class="fa fa-bars" aria-hidden="true"></i>
              [贡献]分析项目需求，清洗并整理相关数据(扩展第三方知识组织系统和 Google trends 数据)，并用
              <mark>D3.js</mark>
              和
              <mark>ECharts</mark>
              进行图形化展示以及实现简易自动分析 功能
              <br/>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              [效果]作品取得第二届共享杯国家级竞赛“特等奖”(1/1500)
            </li>
          </ul>
        </li>
        <li style="margin: 20px 0">
          <h3 class="h3">
            <span>[项目2]new nat 内网穿透系统</span>
            <span class="link">
                                <a href="#" target="_blank">Demo</a>
                            </span>
            <time class="time">2023.02-2023.6</time>
          </h3>
          <ul class="info-content">
            <li>技术栈：HTML5+Vue+Vue-router+ElementUi</li>
            <li>
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              [目标]实现内网映射到公网的web管理界面，创建端口，下载客户端进行穿透
              <br/>
              <i class="fa fa-users" aria-hidden="true"></i>
              [团队]与 1 位同学
              <br/>
              <i class="fa fa-bars" aria-hidden="true"></i>
              [贡献]分析项目需求，完成前端界面所有功能，包括axios 和 mysql 的连接
              <br/>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              [效果]能够实现内网穿透基本功能，现已参加挑战者杯。
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ye2 {
  text-align: left;
}

.h3 {
  display: flex;
  justify-content: space-between
}

.link {
  font-size: 12px;
  border: 1px solid #4db6ac;
  padding: 3px 3px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.time {
  font-weight: 300;
}

a {

  line-height: 12px;
  text-decoration: none;
  color: #1abc9c;
  cursor: pointer;
}

.info-content {

  color: #a8a6a6;
}

</style>
