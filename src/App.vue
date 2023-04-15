<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: "small",
    };
  },
});
</script>

<style scoped></style>
