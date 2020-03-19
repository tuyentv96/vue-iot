<template>
  <div class="hello">
    <el-table :data="devices" @row-click="rowClicked" style="width: 100%">
      <el-table-column prop="ID" label="ID" sortable></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="type" label="Type"></el-table-column>
      <el-table-column prop="accessToken" label="Access Token"></el-table-column>
      <el-table-column prop="createdAt" label="Created At"></el-table-column>
      <el-table-column prop="updatedAt" label="Updated At"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Devices",
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      actFetchDevices: "actFetchDevices"
    }),
    rowClicked(row) {
      console.log("clicked");
      console.log(row);
      this.$router.push({
        name: "device_details",
        params: { classID: row.classID, deviceID: row.ID }
      });
    }
  },
  created() {
    this.actFetchDevices(this.$route.params.classID);
  },
  data() {
    return {};
  },
  computed: mapGetters({
    devices: "getDevices"
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