<template>
  <div style="display: flex;flex-direction: column;">
    <DingTalkHead></DingTalkHead>
    <Banner></Banner>
    <Cart></Cart>
  </div>
</template>

<script>
import DingTalkHead from "@/components/DingTalkHead.vue"
import Banner from "@/components/banner.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "Body",
  components: {
    Cart,
    Banner,
    DingTalkHead
  }
}
</script>

<style scoped>

</style>
