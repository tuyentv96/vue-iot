<template>
  <div class="home">
    <WorkflowDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import WorkflowDetail from "@/components/WorkflowDetail.vue";

export default {
  name: "home",
  components: {
    WorkflowDetail
  }
};
</script>
