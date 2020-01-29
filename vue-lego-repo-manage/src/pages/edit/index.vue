<template>
  <div class="container">
    <img alt="Vue logo" src="../../assets/logo.png" />
    this is {{ repo.site }}
  </div>
</template>

<script>
export default {
  name: 'edit-con',
  data() {
    return {
      repo: {},
    };
  },
  created() {
    this.repo = JSON.parse(window.localStorage.micro).data;
  },
};
</script>

<style scoped></style>
