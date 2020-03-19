<template>
  <div class="container">
    <el-row>
      <el-col id="left-nav" :span="3">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col id="right-content" :span="18" style="margin-top: 30px">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-container id="con">
          <el-container>
            <el-tabs style="width: 100%">
              <el-tab-pane label="Properties">
                <el-container>
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
                      <span>{{device.createdAt}}</span>
                    </el-form-item>
                    <el-form-item label="Updated At">
                      <span>{{device.updatedAt}}</span>
                    </el-form-item>
                    <div style="margin-top: 50px">
                      <el-button
                        v-loading.fullscreen.lock="fullscreenLoading"
                        @click="saveDevice"
                        type="primary"
                      >Save</el-button>
                    </div>
                  </el-form>
                </el-container>
              </el-tab-pane>

              <el-tab-pane class="tab_content" label="Atrribute" style="width: 1000px">
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
          </el-container>
          <el-aside id="right_aside" width="100px">
            <div>Device Logs</div>
          </el-aside>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DeviceDetail",
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
#left-nav {
  margin-top: 80px;
}

#info_aside {
  margin-top: 100px;
  padding: 20px;
  text-align: left;
}
.tab_content {
  margin: 0 auto;
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
}
</style>