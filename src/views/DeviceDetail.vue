<template>
  <div class="container">
    <el-row>
      <el-col id="content">
        <el-tabs style="width: 100%">
          <el-tab-pane class="tab_content" label="Properties">
            <el-form label-width="auto">
              <el-form-item label="Name">
                <el-input v-model="device.name"></el-input>
              </el-form-item>
              <el-form-item label="Access Token">
                <el-input v-model="device.accessToken"></el-input>
              </el-form-item>
              <el-form-item label="ClassID">
                <span>{{device.classID}}</span>
              </el-form-item>
              <el-form-item label="Type">
                <span>{{device.type}}</span>
              </el-form-item>
              <el-form-item label="Created At">
                <span>{{device.createdAt | formatDate}}</span>
              </el-form-item>
              <el-form-item label="Updated At">
                <span>{{device.updatedAt | formatDate}}</span>
              </el-form-item>
              <div style="margin-top: 50px">
                <el-button
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click="saveDevice"
                  type="primary"
                >Save</el-button>
              </div>
            </el-form>
          </el-tab-pane>

          <el-tab-pane class="tab_content" label="Atrribute">
            <div>
              <el-table :data="attrValues">
                <el-table-column prop="attributeName" label="attributeName"></el-table-column>
                <el-table-column prop="value" label="value"></el-table-column>
                <el-table-column prop="createdAt" label="createdAt"></el-table-column>
                <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
              </el-table>
              <div style="float:right;margin-top:30px">
                <el-pagination background layout="prev, pager, next" :total="attributeTotal"></el-pagination>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "device-detail",
  methods: {
    ...mapActions({
      actFetchDeviceByID: "actFetchDeviceByID",
      actUpdateDevice: "actUpdateDevice",
      actFetchDeviceAttrValues: "actFetchDeviceAttrValues"
    }),
    saveDevice() {
      this.fullscreenLoading = true;
      this.actUpdateDevice({
        classID: this.$route.params.classID,
        deviceID: this.$route.params.deviceID,
        device: this.device
      }).then(() => {
        this.fullscreenLoading = false;
      });
    }
  },
  created() {
    this.actFetchDeviceByID({
      classID: this.$route.params.classID,
      deviceID: this.$route.params.deviceID
    }),
      this.actFetchDeviceAttrValues({
        deviceID: this.$route.params.deviceID
      });
  },
  data() {
    return {
      fullscreenLoading: false,
      attributeTotal: 1,
      attributeData: [
        {
          createdAt: "2016-05-03",
          updatedAt: "2016-05-03",
          attribute: "Tom",
          dataType: "number",
          value: "123"
        },
        {
          createdAt: "2016-05-03",
          updatedAt: "2016-05-03",
          attribute: "Tom",
          dataType: "number",
          value: "567"
        }
      ]
    };
  },
  computed: mapGetters({
    device: "getDevice",
    attrValues: "getAttrValues"
  })
};
</script>

<style>
.tab_content {
  margin: 0 auto;
}
/* #left-nav {
  margin-top: 80px;
}

#info_aside {
  margin-top: 100px;
  padding: 20px;
  text-align: left;
}


.el-container {
  margin: auto;
}

#con {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
}

.el-form {
  margin: auto;
}

.el-tab-pane {
  margin-top: 50px;
}

#right-content {
  margin-top: 30px;
  margin-left: 20px;
} */
</style>