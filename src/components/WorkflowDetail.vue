<template>
  <div class="container">
    <el-row>
      <el-col id="content">
        <el-tabs style="width: 100%">
          <el-tab-pane class="tab_content" label="Properties">
            <el-form label-width="auto">
              <el-form-item label="Name">
                <el-input v-model="workflow.name"></el-input>
              </el-form-item>
              <el-form-item label="ClassID">
                <span>{{workflow.classID}}</span>
              </el-form-item>
              <el-form-item label="Enable">
                <span>{{workflow.enable}}</span>
              </el-form-item>
              <el-form-item label="Created At">
                <span>{{workflow.createdAt | formatDate}}</span>
              </el-form-item>
              <el-form-item label="Updated At">
                <span>{{workflow.updatedAt | formatDate}}</span>
              </el-form-item>
              <div style="margin-top: 50px">
                <el-button
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click="saveWorkflow"
                  type="primary"
                >Save</el-button>
              </div>
            </el-form>
          </el-tab-pane>

          <el-tab-pane class="tab_content" label="Actions">
            <div>
              <el-table :data="actions">
                <el-table-column prop="ID" label="ID"></el-table-column>
                <el-table-column prop="actionType" label="actionType"></el-table-column>
                <el-table-column prop="triggerQuantifier" label="triggerQuantifier"></el-table-column>
                <el-table-column prop="acceptActionID" label="Accept ActionID"></el-table-column>
                <el-table-column prop="createdAt" label="createdAt"></el-table-column>
                <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>

          <el-tab-pane class="tab_content" label="Design">
            <div>
              <TreeChart :json="treeData" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TreeChart from "vue-tree-chart";

export default {
  name: "DeviceDetail",
  components: {
    TreeChart
  },
  methods: {
    ...mapActions({
      actFetchWorkflowByID: "actFetchWorkflowByID",
      actFetchActionsByWorkflowID: "actFetchActionsByWorkflowID"
    }),
    saveWorkflow() {}
  },
  created() {
    this.actFetchWorkflowByID({
      classID: this.$route.params.classID,
      workflowID: this.$route.params.workflowID
    }),
      this.actFetchActionsByWorkflowID(this.$route.params.workflowID);
  },
  data() {
    return {
      fullscreenLoading: false,
      treeData: {
        name: "root",
        image_url: "https://static.refined-x.com/avat.jpg",
        children: [
          {
            name: "children1",
            image_url: "https://static.refined-x.com/avat1.jpg"
          },
          {
            name: "children2",
            image_url: "https://static.refined-x.com/avat2.jpg",
            mate: {
              name: "mate",
              image_url: "https://static.refined-x.com/avat3.jpg"
            },
            children: [
              {
                name: "grandchild",
                image_url: "https://static.refined-x.com/avat.jpg"
              },
              {
                name: "grandchild2",
                image_url:
                  "https://www.kindpng.com/picc/b/78-786207_avatar-png-icon.png"
              },
              {
                name: "grandchild3",
                image_url:
                  "https://www.kindpng.com/picc/b/78-786207_avatar-png-icon.png"
              }
            ]
          },
          {
            name: "children3",
            image_url: "https://static.refined-x.com/avat.jpg"
          }
        ]
      }
    };
  },
  computed: mapGetters({
    workflow: "getWorkflow",
    actions: "getActions"
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