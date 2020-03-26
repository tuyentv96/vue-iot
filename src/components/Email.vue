<template>
  <div class="email__wrapper">
    <!-- <p>Content</p>
    <span>
      <el-input v-model="data"></el-input>
    </span>-->

    <el-row :gutter="20">
      <el-col :span="4">
        <p>Email</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data.Email"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <p>Content</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data.Content"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "c-email",
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
/* .email__wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
} */
</style>

