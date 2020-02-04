<template>
  <div class="container">
    <el-tree :data="treeData" :props="defaultProps"></el-tree>
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
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  async created() {
    this.repo = JSON.parse(window.localStorage.micro).data;
    this.treeData = await connect.getRepoNodesByPath(this.repo.site, 'master', ['src', 'pages']);
  },
};
</script>

<style scoped></style>
