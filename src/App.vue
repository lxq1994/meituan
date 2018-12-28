<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import Index from "./pages/Index";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
export default {
  name: 'App',
  components: {Page8,Page7,Page6,Page5,Page4,Page3, Page2, Index},
}
</script>

<style lang="scss" scoped>

</style>
