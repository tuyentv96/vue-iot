<template>
  <div class="branch__wrapper">
    <el-col>
      <c-condition ref="cond" :condition="data" :attrs="attrs" />
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
  props: {
    index: {
      required: true
    },
    data: {
      required: true
    },
    attrs: {
      required: true
    }
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    getData() {
      let cond = this.$refs.cond.getCurrentCond();
      return cond;
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

