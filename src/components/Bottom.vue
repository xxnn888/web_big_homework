<template>
  <div class="list">
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53038102530513" target="_blank">
      <img src="https://www.beian.gov.cn/portal/download?token=99aac4f3-cf74-47fd-9b5b-c5d755b3a52c" alt="">
      <p style="display: inline-block">滇公网安备 53038102530515号</p>
    </a>

    <div>
      <a href="https://beian.miit.gov.cn/" target="_blank" style="margin-left: 15px">滇ICP备2023001037号-2</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom"
}
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
