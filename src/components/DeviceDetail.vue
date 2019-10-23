<template>
  <div class="hello">
    <el-table
      :data="tableData"
      @row-click="rowClicked"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="serial" label="Serial Number" width="180"></el-table-column>
      <el-table-column prop="created_at" label="Created At" width="180"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
let values = [];
values.push({
  id: 1,
  name: "Tom",
  serial: "012345",
  created_at: "2016-05-03"
});
export default {
  name: "Devices",
  props: {
    msg: String
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
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