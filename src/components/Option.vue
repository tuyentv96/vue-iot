<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="7">
        <c-input :value="option" holder="Value" />
      </el-col>

      <!-- <el-col :span="17">
        <c-input
          :value="option.label"
          holder="Insert Option"
          @inputWasUpdate="option.label = $event"
          :disabled="disabled"
        />
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import { Row, Col } from "element-ui";
import CInput from "@/components/Input.vue";
export default {
  name: "c-option",
  components: {
    [CInput.name]: CInput,
    [Row.name]: Row,
    [Col.name]: Col
  },
  props: {
    option: String
  }
};
</script>

<style>
</style>