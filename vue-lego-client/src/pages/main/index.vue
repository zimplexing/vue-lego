<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="项目名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="项目地址">
        <el-input v-model="form.site"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">开始编辑</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'main-con',
  data() {
    return {
      form: {
        name: 'vue-manage-system',
        site: 'https://github.com/xxholly32/vue-manage-system.git',
      },
    };
  },
  methods: {
    onSubmit() {
      const form = this.form;
      window.localStorage.micro = JSON.stringify({
        type: 'vue-lego-repo-manage',
        data: form,
      });
      this.$router.push({ path: '/vue-lego-repo-manage/' });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
