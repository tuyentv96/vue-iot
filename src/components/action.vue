<template>
  <div class="branch__wrapper">
    <el-col>
      <c-condition :condition="data" :attrs="attrs" @update-cond="update" />
    </el-col>
  </div>
</template>

<script>
import CCondition from "@/components/Condition.vue";
import { Row, Col } from "element-ui";

export default {
  name: "c-action",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [CCondition.name]: CCondition
  },
  props: {
    data: {
      required: true
    },
    attrs: {
      required: true
    },
    type: {
      required: true
    }
  },
  data() {
    return {
      input: ""
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    update() {
      console.log("update branch data");
      this.$emit("update", this.data);
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

