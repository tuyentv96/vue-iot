<template>
  <div>
    <el-row>
      <div class="mySlides" v-for="(exp,index) in exps" v-bind:key="exp.ID">
        <el-row :gutter="4">
          <el-col :span="4">
            <el-input v-model="exp.quantifier"></el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="exp.var"></el-input>
          </el-col>

          <el-col :span="2">
            <el-input v-model="exp.op"></el-input>
          </el-col>

          <el-col :span="8">
            <el-input v-model="exp.val"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button @click="deleteExp(index)" type="primary" icon="el-icon-remove"></el-button>
          </el-col>
        </el-row>
      </div>
    </el-row>

    <el-row>
      <el-button @click="addExp" type="success">ADD</el-button>
    </el-row>
  </div>
</template>

<script>
import COption from "@/components/Option.vue";
import { Row, Col } from "element-ui";

const CURRENT_TIME_FUNC_TYPE = "currentTimeFunc";

const conditionDateOperator = [
  {
    label: "is before",
    op: "<"
  },
  { label: "is on or before", op: "<=" },
  { label: "is after", op: ">" },
  { label: "is on or after", op: ">=" },
  { label: "is", op: "==" },
  { label: "is not", op: "!=" }
];

const conditionNumberOperator = [
  { label: "less than", op: "<" },
  { label: "less or equal", op: "<=" },
  { label: "greater", op: ">" },
  { label: "greater or equal", op: ">=" },
  { label: "equal to", op: "==" },
  { label: "not equal to", op: "!=" }
];

const conditionTextOperator = [
  { label: "is", op: "==" },
  { label: "is not", op: "!=" }
];

export default {
  name: "c-condition",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [COption.name]: COption
  },
  props: {
    condition: {
      required: true
    },
    attrs: {
      required: true
    }
  },
  data() {
    return {
      input: "",
      exps: []
    };
  },
  methods: {
    getCurrentCond() {
      let cond;
      this.exps.forEach((exp, i) => {
        if (i == 0) {
          cond = {
            var: exp.var,
            op: exp.op,
            val: exp.val
          };
        } else {
          cond = {
            comparator: exp.quantifier == "AND" ? "&&" : "||",
            rules: [
              { ...cond },
              {
                op: exp.op,
                val: exp.val,
                var: exp.var
              }
            ]
          };
        }
      });

      return cond;
    },
    makeCond() {
      let cond;
      this.exps.forEach((exp, i) => {
        if (i == 0) {
          cond = {
            var: exp.var,
            op: exp.op,
            val: exp.val
          };
        } else {
          cond = {
            comparator: exp.quantifier == "AND" ? "&&" : "||",
            rules: [
              { ...cond },
              {
                op: exp.op,
                val: exp.val,
                var: exp.var
              }
            ]
          };
        }
      });
    },
    addExp() {
      let currentCond = this.getCurrentCond();
      let newCondition;
      if (
        currentCond.comparator &&
        currentCond.var &&
        currentCond.op &&
        currentCond.val
      ) {
        currentCond = {
          var: "",
          op: "",
          val: ""
        };
        newCondition = currentCond;
      } else {
        newCondition = {
          comparator: "&&",
          rules: [
            { ...currentCond },
            {
              op: "",
              val: "",
              var: ""
            }
          ]
        };
      }

      this.renderCond(newCondition);
    },
    deleteExp(index) {
      this.exps.splice(index, 1);
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
    },
    explainCond(comp, quantifier, quantifierSelected, path) {
      if (Array.isArray(comp.rules)) {
        comp.rules.map((rule, i) => {
          let quantifierSelector = quantifier;
          if (i) {
            if (quantifierSelected || i > 1) {
              quantifierSelector = comp.comparator === "&&" ? "AND" : "OR";
            } else {
              quantifierSelector = comp.comparator === "&&" ? "AND" : "OR";
            }
          }
          const subPath = path ? path.slice(0) : [];
          subPath.push("rules");
          subPath.push(i);
          return this.explainCond(rule, quantifierSelector, true, subPath);
        });
      } else {
        const { var: Var, op: Op, val: Val } = comp;
        console.log("comp:", Var, Op, Val);
        console.log("quan:", quantifier);
        console.log("ptype:", this.getTypeParam(Var));
        this.exps.push({
          quantifier: quantifier,
          var: Var,
          op: Op,
          val: Val
        });
      }
    },
    renderCond(newCondition) {
      this.exps = [];
      this.explainCond(newCondition, undefined, false, []);
    },
    getTypeParam(attrName) {
      console.log("attrs:", this.attrs);
      const res = this.attrs.find(attr => attr.name === attrName);

      if (res && res.dataType) {
        return res.dataType;
      }
      return "";
    },
    getLabelConditionOp(typeParam, op) {
      switch (typeParam) {
        case "text": {
          const foundOp = conditionTextOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "email": {
          const foundOp = conditionTextOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "mobileNumber": {
          const foundOp = conditionTextOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "date":
        case CURRENT_TIME_FUNC_TYPE: {
          const foundOp = conditionDateOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "number": {
          const foundOp = conditionNumberOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "duration": {
          const foundOp = conditionNumberOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        case "boolean": {
          const foundOp = conditionTextOperator.find(element => {
            return element.op === op;
          });
          return foundOp ? foundOp.label : "";
        }
        default:
          return "";
      }
    }
  },
  created() {
    this.exps = [];
    this.explainCond(this.condition, undefined, false, []);
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

