<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <div class="title">
          <h5 class="mb-2">Custom colors</h5>
        </div>
        <el-menu
          background-color="#001529"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
        <div class="collapse">collapse</div>
      </el-aside>
      <div class="main-container">
        <HeaderBar></HeaderBar>
        <app-main></app-main>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {
Document,
Location,
Menu as IconMenu,
Setting
} from "@element-plus/icons-vue";
import AppMain from "./components/appMain.vue";
import HeaderBar from "./components/header/index.vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.common-layout {
  height: 100%;
  position: relative;
  width: 100%;
}
.aside {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-menu-vertical-demo {
  flex: 1;
}
.title {
  flex: 0;
}
.callapse {
  flex: 0;
}

.main-container {
  background: #f0f2f5;
  height: 100vh;
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
