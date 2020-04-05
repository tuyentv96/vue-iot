<template>
  <div class="branch__wrapper">
    <el-col>
      <c-condition ref="cond" :condition="data" :attrs="attrs" @update-cond="update" />
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
      console.log("getdata:", cond);
      return cond;
    },
    update(cond) {
      console.log("update branch data:", cond);
      let newData = this.data;
      newData.System_BranchData = cond;
      this.$emit("update", newData);
    }
  },
  created() {
    console.log("BRANCHHHHH:", this.data);
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

