<template>
  <div>
    <el-row :gutter="4">
      <el-col :span="10">
        <el-input placeholder="Please input"></el-input>
      </el-col>

      <el-col :span="4">
        <el-dropdown>
          <span class="el-dropdown-link">List</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="10">
        <el-input placeholder="input"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-button @click="addExp" type="primary">Confirm</el-button>
    </el-row>
  </div>
</template>

<script>
import COption from "@/components/Option.vue";
import { Row, Col } from "element-ui";

// const conditionNumberOperator = [
//   { label: "less than", op: "<" },
//   { label: "less or equal", op: "<=" },
//   { label: "greater", op: ">" },
//   { label: "greater or equal", op: ">=" },
//   { label: "equal to", op: "==" },
//   { label: "not equal to", op: "!=" }
// ];

export default {
  name: "c-condition",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [COption.name]: COption
  },
  props: ["condition"],
  data() {
    return {
      input: ""
    };
  },
  methods: {
    createClass() {
      console.log("TEST");
    },
    addExp() {
      console.log("Add exp");
      let newCondition;
      if (this.condition.rules) {
        this.condition.rules.push({
          var: "",
          op: "",
          val: ""
        });
        newCondition = this.condition;
      } else {
        newCondition = {
          comparator: "&&",
          rules: [
            { ...this.condition },
            {
              op: "",
              val: "",
              var: ""
            }
          ]
        };
      }

      console.log(newCondition);
      this.condition = newCondition;
    },
    subExp(path) {
      if (this.condition.rules) {
        const index = parseInt(path[path.length - 1], 10);
        this.condition.rules.splice(index, 1);
        let newCondition = this.condition;
        if (this.condition.rules.length === 1) {
          newCondition = {
            ...this.condition.rules[0]
          };
        }

        this.condition = newCondition;
      }
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

