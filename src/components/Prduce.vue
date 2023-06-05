<template>
  <div class="container">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="组织数字化">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="业务数字化">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="智能办公硬件">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="钉钉教育">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="查企业">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="迁移解决方案">
        <el-empty description="空,正在开发中"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Prduce",
  data() {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style scoped>

.container .el-tabs--left, .el-tabs--right {
  background-color: #fff;
}
</style>
