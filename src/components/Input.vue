<template>
  <input
    class="component-input"
    :type="type || 'text'"
    v-model="inputData"
    v-bind:placeholder="holder"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: "c-input",
  props: {
    holder: String,
    required: Boolean,
    value: [String, Number],
    type: String,
    disabled: Boolean
  },
  data() {
    return {
      inputData: this.value
    };
  },
  watch: {
    value: function(newInput) {
      this.inputData = newInput;
    },
    inputData: function(newInut) {
      this.$emit("inputWasUpdate", newInut);
    }
  }
};
</script>

<style>
/* // .component-input {
//   margin-bottom: 15px;
//   padding: 7px 0px;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0);
//   border: none;
//   line-height: 1.3;
//   border-bottom: 1px solid #c4c4c4;
//   &:focus {
//     outline: none;
//   }
// } */
</style>