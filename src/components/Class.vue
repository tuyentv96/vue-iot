<template>
  <div class="hello">
    <el-table :data="classes" @row-click="rowClicked" style="width: 100%">
      <el-table-column prop="ID" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="createdAt" label="createdAt"></el-table-column>
      <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
    </el-table>
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
      actFetchClasses: "actFetchClasses"
    }),
    rowClicked(row) {
      this.$router.push({
        name: "devices",
        params: { classID: row.ID }
      });
    }
  },
  created() {
    this.actFetchClasses({});
  },
  data() {
    return {};
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