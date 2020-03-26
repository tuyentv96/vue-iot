<template>
  <div>
    <el-row class="header__logo-wrapper" type="flex" justify="center" align="middle">
      <img class="header__logo" src="@/assets/img/logo_merisier_500.png" />
    </el-row>
  </div>
</template>

<script>
import { Row } from "element-ui";
export default {
  name: "l-header",
  components: {
    [Row.name]: Row
  }
};
</script>

<style>
.header__logo-wrapper {
  height: 150px;
  background-color: white;
}
.header__logo {
  height: 80px;
}
</style>