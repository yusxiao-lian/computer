<template>
  <div>
    <div v-if="isMobile">
      <HfiveIndex />
    </div>
    <div v-else>
      <PcIndex />
    </div>
  </div>
</template>

<script>
import PcIndex from "../components/Pc/index.vue"
import HfiveIndex from "../components/Hfive/index.vue"
export default {
  components: { PcIndex, HfiveIndex },
  computed: {
    isMobile() {
      const userAgent = navigator.userAgent;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }
  }
};
</script>

<style lang="less">
body {
    background-color: #ffffff;
    padding-bottom: 35px;
}
</style>
