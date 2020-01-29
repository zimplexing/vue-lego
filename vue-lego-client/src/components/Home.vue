<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="content-box">
      <div class="content">
        <router-view></router-view>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue';
export default {
  data() {
    return {};
  },
  components: {
    vHead,
  },
  created() {},
};
</script>
