<template>
  <div class="header">
    <!-- <div class="logo">vue-lego-client</div> -->
    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">项目管理</el-menu-item>
      <el-menu-item index="2">appVueHash</el-menu-item>
      <el-menu-item index="3">appVueHistory</el-menu-item>
    </el-menu>
    <div class="header-right"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '1':
          this.$router.push({ path: '/main/' });
          break;
        case '2':
          this.$router.push({ path: '/app-vue-hash/' });
          break;
        case '3':
          this.$router.push({ path: '/app-vue-history/' });
          break;
      }
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  background-color: #242f42;
  width: 100%;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
