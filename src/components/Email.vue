<template>
  <div class="email__wrapper">
    <!-- <p>Content</p>
    <span>
      <el-input v-model="data"></el-input>
    </span>-->

    <el-row :gutter="20">
      <el-col :span="4">
        <p>SendTo</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data.sendTo"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <p>Subject</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data.subject"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <p>Body</p>
      </el-col>
      <el-col :span="17" :offset="3">
        <el-input v-model="data.body"></el-input>
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

