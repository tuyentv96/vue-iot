<template>
  <div class="hello">
    <div>
      <el-dialog title="Create Device" :visible.sync="dialogFormVisible">
        <el-form :model="newDevice">
          <el-form-item label="Name" :label-width="'50'">
            <el-input v-model="newDevice.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Type" :label-width="'120'">
            <el-select v-model="newDevice.Type" placeholder="Please select a Type">
              <el-option label="Thing" value="Thing"></el-option>
              <el-option label="Gateway" value="Gateway"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button @click="createDevice" type="primary">Confirm</el-button>
        </span>
      </el-dialog>
    </div>

    <el-row id="content">
      <el-tabs>
        <el-tab-pane label="Properties">
          <el-container>
            <el-form label-width="200">
              <el-form-item label="Name">
                <el-input v-model="classObj.name"></el-input>
              </el-form-item>
              <el-form-item label="Created At">
                <span>{{classObj.createdAt}}</span>
              </el-form-item>
              <el-form-item label="Updated At">
                <span>{{classObj.updatedAt}}</span>
              </el-form-item>>
              <div>
                <el-button
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click="saveClass"
                  type="primary"
                >Save</el-button>
              </div>
            </el-form>
          </el-container>
        </el-tab-pane>

        <el-tab-pane class="tab_content" label="Attribute">
          <el-container>
            <el-table :data="attrs" style="width: 100%">
              <el-table-column prop="ID" label="ID" sortable></el-table-column>
              <el-table-column prop="name" label="Name"></el-table-column>
              <el-table-column prop="displayName" label="displayName"></el-table-column>
              <el-table-column prop="attributeType" label="attributeType"></el-table-column>
              <el-table-column prop="dataType" label="dataType"></el-table-column>
              <el-table-column prop="createdAt" label="Created At"></el-table-column>
              <el-table-column prop="updatedAt" label="Updated At"></el-table-column>
            </el-table>
          </el-container>

          <el-row style="margin-top: 30px">
            <el-row style="text-align: left; font-size: 10px;  font-weight: bold;">
              <el-col class="attr_item_col" :span="4">
                <span>Name</span>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <span>Display Name</span>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <span>Aattribute Type</span>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <span>Data Type</span>
              </el-col>
            </el-row>

            <el-row>
              <el-col class="attr_item_col" :span="4">
                <el-input placeholder="Please input" v-model="attribute.name"></el-input>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <el-input placeholder="Please input" v-model="attribute.displayName"></el-input>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <el-select v-model="attribute.attributeType" placeholder="Select">
                  <el-option
                    v-for="item in attrTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col class="attr_item_col" :span="4">
                <el-select v-model="attribute.dataType" placeholder="Select">
                  <el-option
                    v-for="item in dataTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>

            <el-row style="margin: auto; padding-top: 20px;">
              <el-button @click="updateAttributes" type="primary">Update</el-button>
            </el-row>
          </el-row>
        </el-tab-pane>

        <el-tab-pane class="tab_content" label="Devices">
          <el-row style="float: right">
            <el-button type="primary" @click="dialogFormVisible = true">Create</el-button>
          </el-row>
          <div>
            <el-table :data="devices" style="width: 100%">
              <el-table-column prop="ID" label="ID" sortable></el-table-column>
              <el-table-column label="Name">
                <template slot-scope="scope">
                  <router-link
                    :to="{ name: 'device_details', params: { classID: classID, deviceID: scope.row.ID }}"
                  >
                    <p>{{ scope.row.name }}</p>
                  </router-link>
                  <!-- <span>{{ scope.row.name }}</span> -->
                </template>
              </el-table-column>
              <el-table-column prop="type" label="Type"></el-table-column>
              <el-table-column prop="accessToken" label="Access Token"></el-table-column>
              <el-table-column prop="createdAt" label="Created At"></el-table-column>
              <el-table-column prop="updatedAt" label="Updated At"></el-table-column>
            </el-table>
            <div style="float:right; margin-top:30px">
              <el-pagination background layout="prev, pager, next" :total="attributeTotal"></el-pagination>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane class="tab_content" label="Workflow">
          <el-row style="float: right">
            <el-button type="primary" @click="dialogFormVisible = true">Create</el-button>
          </el-row>
          <div>
            <el-table :data="workflows" style="width: 100%">
              <el-table-column prop="ID" label="ID" sortable></el-table-column>
              <el-table-column label="Name">
                <template slot-scope="scope">
                  <router-link
                    :to="{ name: 'workflow', params: { classID: classID, workflowID: scope.row.ID }}"
                  >
                    <p>{{ scope.row.name }}</p>
                  </router-link>
                  <!-- <span>{{ scope.row.name }}</span> -->
                </template>
              </el-table-column>
              <el-table-column prop="enable" label="Enable"></el-table-column>
              <el-table-column prop="initialAction" label="Inital Action"></el-table-column>
              <el-table-column prop="createdAt" label="Created At"></el-table-column>
              <el-table-column prop="updatedAt" label="Updated At"></el-table-column>
            </el-table>
            <div style="float:right; margin-top:30px">
              <el-pagination background layout="prev, pager, next" :total="attributeTotal"></el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ClassDetail",
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      actFetchDevices: "actFetchDevices",
      actCreateDevice: "actCreateDevice",
      actFetchClassByID: "actFetchClassByID",
      actFetchAttributesByClassID: "actFetchAttributesByClassID",
      actCreateAttribute: "actCreateAttribute",
      actFetchWorkflowsByClassID: "actFetchWorkflowsByClassID"
    }),
    saveClass() {},
    createDevice() {
      console.log("new:", this.newDevice);
      this.actCreateDevice(this.newDevice).then(() => {
        this.dialogFormVisible = false;
        this.actFetchDevices(this.$route.params.classID);
      });
    },
    updateAttributes() {
      this.attribute.classID = this.$route.params.classID;
      this.actCreateAttribute(this.attribute).then(() => {
        this.attribute = {};
        this.actFetchAttributesByClassID(this.$route.params.classID);
      });
    }
  },
  created() {
    this.actFetchClassByID(this.$route.params.classID);
    this.actFetchDevices(this.$route.params.classID);
    this.actFetchAttributesByClassID(this.$route.params.classID);
    this.actFetchWorkflowsByClassID(this.$route.params.classID);
  },
  data() {
    return {
      classID: this.$route.params.classID,
      attribute: {
        attributeType: "",
        dataType: "",
        name: "",
        displayName: ""
      },
      attrTypeOptions: [
        {
          value: "state",
          label: "State"
        },
        {
          value: "timeseries",
          label: "Timeseries"
        }
      ],
      dataTypeOptions: [
        {
          value: "number",
          label: "Number"
        },
        {
          value: "string",
          label: "String"
        },
        {
          value: "boolean",
          label: "Boolean"
        },
        {
          value: "email",
          label: "Email"
        }
      ],
      attributeTotal: 10,
      fullscreenLoading: false,
      dialogFormVisible: false,
      newDevice: {
        name: "",
        type: "Thing",
        classID: this.$route.params.classID
      }
    };
  },
  computed: mapGetters({
    devices: "getDevices",
    classObj: "getClass",
    attrs: "getAttrs",
    workflows: "getWorkflows"
  })
};
</script>


<style>
/* #content {
  margin-top: 30px;
  /* margin-left: 200px; */
/* } */

/* .attr_item_col {
  margin: 0px 0 0px 25px;
} */
.element__row-customized {
  border-bottom: 1px solid #e7e7e7;
}
.element__row-customized:nth-child(even) {
  background-color: #fafaf9;
}
</style>