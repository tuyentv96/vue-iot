<template>
  <div class="branch__wrapper">
    <el-col>
      <c-condition :condition="data" />
    </el-col>
  </div>
</template>

<script>
import CCondition from "@/components/Condition.vue";
import { Row, Col } from "element-ui";

export default {
  name: "c-branch",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [CCondition.name]: CCondition
  },
  props: ["data"],
  data() {
    return {
      input: ""
    };
  },
  created() {
    console.log(this.data);
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

