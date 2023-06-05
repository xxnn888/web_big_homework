<template>
  <div id="app">
    <div class="home">
      <el-popover
          placement="top-start"
          title="提示"
          width="200"
          trigger="hover"
          content="点我回到主页">
        <p style="color: green">点我回到主页</p>
        <el-button slot="reference"><a href="/"><i class="el-icon-s-home" style="font-size: 40px;color: black;"></i></a>
        </el-button>
      </el-popover>
    </div>
    <ul class="list">
      <li>
        <router-link exact to="/ye1">个人简历</router-link>
      </li>
      <li>
        <router-link to="/ye2">工作经验</router-link>
      </li>
      <li>
        <router-link to="/ye3">数据图表</router-link>
      </li>
      <li>
        <router-link to="/ye4">上传图片</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyInfo"
}
</script>

<style lang="less" scoped>
#app {
  padding: 0 200px;
  text-align: center;

  .home {
    position: absolute;
    top: 0px;
    left: 38px;
  }

  .list {
    display: flex;
    justify-content: space-evenly;
    background-color: orange;

    li {
      a {
        display: inline-block;
        width: 150px;
        height: 50px;
        line-height: 50px;
        font-size: 26px;
        font-weight: 700;
        color: blanchedalmond;

        &:hover {
          color: #fff;
        }
      }

      .cur {
        background-color: rgb(156, 174, 253);
      }
    }
  }
}
</style>
