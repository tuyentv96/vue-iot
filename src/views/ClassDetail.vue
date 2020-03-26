<template>
  <div class="home">
    <ClassDetail msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ClassDetail from "@/components/ClassDetail.vue";

export default {
  name: "home",
  components: {
    ClassDetail
  }
};
</script>
