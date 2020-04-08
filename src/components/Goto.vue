<template>
  <div class="sleep__wrapper">
    <el-input v-model="data"></el-input>
  </div>
</template>

<script>
export default {
  name: "c-goto",
  props: {
    index: {
      required: true
    },
    data: {
      required: true
    }
  }
};
</script>

<style>
/* .branch__wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
} */
</style>

