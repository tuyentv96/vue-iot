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
              <!-- <el-table :data="actions">
                <el-table-column prop="ID" label="ID"></el-table-column>
                <el-table-column prop="actionType" label="actionType"></el-table-column>
                <el-table-column prop="triggerQuantifier" label="triggerQuantifier"></el-table-column>
                <el-table-column label="data">
                  <div>{{actionData.System_ConsoleData}}</div>
                </el-table-column>
                <el-table-column prop="acceptActionID" label="Accept ActionID"></el-table-column>
                <el-table-column prop="createdAt" label="createdAt"></el-table-column>
                <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
              </el-table>-->
              <el-row class="element__row-customized" style="font-family: 'Gotham-Bold'">
                <el-col :span="2">
                  <div>
                    <h4>ID</h4>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div>
                    <h4>actionType</h4>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div>
                    <h4>triggerQuantifier</h4>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div>
                    <h4>data</h4>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div>
                    <h4>
                      CREATED
                      <span class="el-icon-caret-bottom"></span>
                    </h4>
                  </div>
                </el-col>
              </el-row>

              <el-row
                class="element__row-customized"
                v-for="action in actions"
                v-bind:key="action.ID"
              >
                <el-col :span="2">
                  <div>
                    <p>{{ action.ID }}</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div>
                    <p>{{ action.actionType }}</p>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div>
                    <p>{{ action.triggerQuantifier }}</p>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div v-if="action.actionType == 'Console'">
                    <c-console :data="action.actionData.System_ConsoleData"></c-console>
                  </div>
                  <div v-if="action.actionType == 'GoTo'">
                    <p>{{ action.acceptActionID}}</p>
                  </div>
                  <div v-if="action.actionType == 'SendEmail'">
                    <!-- <p>{{ action.actionData.System_EmailData}}</p> -->
                    <c-email :data="action.actionData.System_EmailData"></c-email>
                  </div>
                  <div v-if="action.actionType == 'Branch'">
                    <c-branch :data="action.actionData.System_BranchData"></c-branch>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div>
                    <p style="white-space: pre">{{ action.createdAt | formatDate}}</p>
                  </div>
                </el-col>
              </el-row>
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
import CConsole from "@/components/Console.vue";
import CEmail from "@/components/Email.vue";
import CBranch from "@/components/Branch.vue";

export default {
  name: "DeviceDetail",
  components: {
    TreeChart,
    [CConsole.name]: CConsole,
    [CEmail.name]: CEmail,
    [CBranch.name]: CBranch
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