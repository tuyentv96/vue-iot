<template>
  <div class="container">
    <el-dialog title="Edit Action" :visible.sync="editActionDialogVisible">
      <el-form :model="action">
        <div v-if="action.actionType == 'Console'">
          <c-console :data="action.actionData.System_ConsoleData"></c-console>
        </div>
        <div v-if="action.actionType == 'GoTo'">
          <p>{{ action.acceptActionID}}</p>
        </div>
        <div v-if="action.actionType == 'SendEmail'">
          <c-email :data="action.actionData.System_EmailData"></c-email>
        </div>
        <div v-if="action.actionType == 'Branch'">
          <c-branch
            ref="branchAction"
            :index="action.ID"
            :data="action.actionData.System_BranchData"
            :attrs="attrs"
            @update="update"
          ></c-branch>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editActionDialogVisible = false">Cancel</el-button>
        <el-button @click="updateAction" type="primary">Confirm</el-button>
      </span>
    </el-dialog>

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
            <el-button @click="saveActions" type="primary">Save</el-button>
            <div>
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
                v-for="(action,index) in actions"
                v-bind:key="action.ID"
                ref="actions"
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
                  <el-row>
                    <div v-if="action.actionType == 'Console'">
                      <c-console :data="action.actionData.System_ConsoleData"></c-console>
                    </div>
                    <div v-if="action.actionType == 'GoTo'">
                      <p>{{ action.acceptActionID}}</p>
                    </div>
                    <div v-if="action.actionType == 'SendEmail'">
                      <c-email :data="action.actionData.System_EmailData"></c-email>
                    </div>
                    <div v-if="action.actionType == 'Branch'">
                      <c-branch
                        :index="index"
                        :data="action.actionData.System_BranchData"
                        :attrs="attrs"
                        @update="update"
                      ></c-branch>
                    </div>
                  </el-row>
                  <el-row>
                    <el-button @click="editAction(index)" type="primary">Edit</el-button>
                  </el-row>
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
      actFetchActionsByWorkflowID: "actFetchActionsByWorkflowID",
      actFetchAttributesByClassID: "actFetchAttributesByClassID",
      actUpdateActions: "actUpdateActions",
      actUpdateAction: "actUpdateAction"
    }),
    saveWorkflow() {},
    updateAction() {
      console.log("update action");
      if (this.action.actionType == "Branch") {
        console.log("ACTION BRANCH");
        console.log(this.$refs.branchAction.getData());
        this.action.actionData.System_BranchData = this.$refs.branchAction.getData();
      }
      this.actUpdateAction({
        workflowID: this.$route.params.workflowID,
        actionID: this.action.ID,
        payload: this.action
      }).then(res => {
        console.log("action after update:", res.data);
        this.editActionDialogVisible = false;
        let action = this.actions.find(action => action.ID == res.data.ID);
        if (action) {
          action = res.data;
          this.actions = [];
        }
      });
    },
    editAction(index) {
      this.action = this.actions[index];
      this.editActionDialogVisible = true;
      console.log("edit actions:", index, this.action);
    },
    saveActions() {
      console.log("data", this.actions);

      // console.log("REF", this.$refs);
      // this.actions.forEach((element, index) => {
      //   console.log("index:", element, this.$refs[`element${index}`].getData());
      // });
      this.actUpdateActions({
        workflowID: this.$route.params.workflowID,
        payload: this.actions
      }).then(this.actFetchActionsByWorkflowID(this.$route.params.workflowID));
    },
    update(actionData) {
      console.log("update actions meta:", actionData);
      // this.actUpdateActions({
      //   workflowID: this.$route.params.workflowID,
      //   payload: data
      // });
      this.action.actionData = actionData;
      console.log("wfdata:", this.action);
    }
  },
  created() {
    this.actFetchWorkflowByID({
      classID: this.$route.params.classID,
      workflowID: this.$route.params.workflowID
    }),
      this.actFetchActionsByWorkflowID(this.$route.params.workflowID),
      this.actFetchAttributesByClassID(this.$route.params.classID);
  },
  data() {
    return {
      action: {},
      editActionDialogVisible: false,
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
    actions: "getActions",
    attrs: "getAttrs"
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