<template>
  <div class="home">
    <DeviceDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceDetail from "@/components/DeviceDetail.vue";

export default {
  name: "home",
  components: {
    DeviceDetail
  }
};
</script>
