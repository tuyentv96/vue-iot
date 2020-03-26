<template>
  <div class="branch__wrapper">
    <el-col :span="17">
      <c-option :option="data" />
    </el-col>
  </div>
</template>

<script>
import COption from "@/components/Option.vue";
import { Row, Col } from "element-ui";

export default {
  name: "c-branch",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [COption.name]: COption
  },
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
/* .branch__wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
} */
</style>

