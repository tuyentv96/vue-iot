<template>
  <div class="home">
    <Device msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Device from "@/components/Device.vue";

export default {
  name: "home",
  components: {
    Device
  }
};
</script>
