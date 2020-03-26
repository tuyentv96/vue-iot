<template>
  <div class="console__wrapper">
    <!-- <p>Content</p>
    <span>
      <el-input v-model="data"></el-input>
    </span>-->

    <el-row :gutter="20">
      <el-col :span="4">
        <p>Content</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "c-console",
  props: ["data"],
  data() {
    return {
      input: ""
    };
  },
  methods: {}
};
</script>

<style>
/* .console__wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
} */
</style>

