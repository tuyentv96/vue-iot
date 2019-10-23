<template>
  <div class="home">
    <Class msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Class from "@/components/Class.vue";

export default {
  name: "home",
  components: {
    Class
  }
};
</script>
