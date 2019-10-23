<template>
  <div class="hello">
    <el-table
      :data="tableData"
      @row-click="rowClicked"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
    <el-row>
      <el-button type="success" plain>Success</el-button>
    </el-row>
  </div>
</template>

<script>
let values = [];
values.push({
  date: "2016-05-03",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles"
});
export default {
  name: "Class",
  props: {
    msg: String
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      console.log(row);

      return "";
    },
    rowClicked(row) {
      console.log("clicked");
      console.log(row.rowIndex);
    }
  },
  data() {
    return {
      tableData: values
    };
  }
};
</script>


<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>