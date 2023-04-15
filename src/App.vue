<template>
  <el-config-provider :size="size" :z-index="zIndex">
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

<style>
#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
</style>
