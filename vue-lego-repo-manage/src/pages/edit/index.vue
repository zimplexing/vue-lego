<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          v-loading="loading"
          @node-click="handleNodeClick"
        ></el-tree>
      </el-col>
      <el-col :span="16">
        <pre v-highlightjs="contant"><code class="vue"></code></pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { connect } from '../../../packages/github-lego-help';
export default {
  name: 'edit-con',
  data() {
    return {
      repo: {},
      treeData: [],
      loading: true,
      contant: '',
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  async created() {
    this.repo = JSON.parse(window.localStorage.micro).data;
    this.treeData = await connect.getRepoNodesByPath(this.repo.site, 'master', ['src', 'pages']);
    this.loading = false;
  },
  methods: {
    async handleNodeClick(data) {
      this.contant = await connect.getFile(data.url);
    },
  },
};
</script>

<style scoped></style>
