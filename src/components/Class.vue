<template>
  <div class="hello">
    <div>
      <el-button type="primary" @click="dialogFormVisible = true" style="float: right">Create</el-button>
    </div>
    <div>
      <el-dialog title="Create Class" :visible.sync="dialogFormVisible">
        <el-form :model="newClass">
          <el-form-item label="Name" :label-width="'50'">
            <el-input v-model="newClass.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button @click="createClass" type="primary">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <el-table :data="classes" @row-click="rowClicked" style="width: 100%">
        <el-table-column prop="ID" label="ID"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="createdAt" label="createdAt"></el-table-column>
        <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Class",
  props: {
    msg: String
  },

  methods: {
    ...mapActions({
      actFetchClasses: "actFetchClasses",
      actCreateClass: "actCreateClass"
    }),
    createClass() {
      this.actCreateClass(this.newClass).then(() => {
        this.dialogFormVisible = false;
        this.actFetchClasses();
      });
    },
    rowClicked(row) {
      this.$router.push({
        name: "devices",
        params: { classID: row.ID }
      });
    }
  },
  created() {
    this.actFetchClasses(this.newClass).then();
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      newClass: {
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: mapGetters({
    classes: "getClasses"
  })
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