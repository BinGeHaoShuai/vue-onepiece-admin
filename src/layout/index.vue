<template>
  <div class="common-layout">
    <el-container>
      <sidebar></sidebar>
      <div class="main-container">
        <HeaderBar></HeaderBar>
        <app-main></app-main>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import sidebar from "./components/sidebar/index.vue";
import AppMain from "./components/appMain.vue";
import HeaderBar from "./components/header/index.vue";
</script>

<style scoped>
.common-layout {
  height: 100%;
  position: relative;
  width: 100%;
}

.el-container {
  height: 100%;
}
.main-container {
  background: #f0f2f5;
  height: 100vh;
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
