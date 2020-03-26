<template>
  <div>
    <!-- <el-row>
      <el-col id="content">
        <el-tabs style="width: 100%">
          <el-tab-pane class="tab_content" label="Properties">
            <el-form label-width="auto">
              <el-form-item label="Name">
                <el-input v-model="Workflow.name"></el-input>
              </el-form-item>
              <el-form-item label="Enalbe">
                <el-input v-model="Workflow.enalbe"></el-input>
              </el-form-item>
              <el-form-item label="ClassID">
                <span>{{workflow.classID}}</span>
              </el-form-item>
              <el-form-item label="initialAction">
                <span>{{workflow.initialAction}}</span>
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

          <el-tab-pane class="tab_content" label="Design Workflow">
            <div>
              <el-table :data="actions">
                <el-table-column prop="ID" label="ID"></el-table-column>
                <el-table-column prop="actionType" label="actionType"></el-table-column>
                <el-table-column prop="createdAt" label="createdAt"></el-table-column>
                <el-table-column prop="updatedAt" label="updatedAt"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "test",
  methods: {
    ...mapActions({
      actFetchWorkflowByID: "actFetchWorkflowByID",
      actFetchActionsByWorkflowID: "actFetchActionsByWorkflowID"
    }),
    saveWorkflow() {}
  },
  created() {
    // this.actFetchWorkflowByID(this.$route.params.classID),
    //   this.actFetchActionsByWorkflowID({
    //     classID: this.$route.params.classID,
    //     workflowID: this.$route.params.workflowID
    //   });
  },
  data() {
    return {
      fullscreenLoading: false
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
</style>