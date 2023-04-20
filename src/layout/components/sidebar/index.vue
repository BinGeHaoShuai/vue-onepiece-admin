<template>
  <el-aside width="200px" class="aside">
    <div class="title">
      <el-image style="width: 30px; height: 30px" :src="logoIcon" fit="fill" />
      <p class="title-text">OnePieceAdmin</p>
    </div>
    <el-scrollbar wrap-class="menu-bar">
      <el-menu
        background-color="#001529"
        default-active="2"
        text-color="#fff"
        class="menu-bar"
        @open="handleOpen"
        @close="handleClose"
      >
        <side-item
          v-for="routes in menuData"
          :key="routes.path"
          :item="routes"
          :base-path="routes.path"
        />
      </el-menu>
    </el-scrollbar>

    <div class="collapse">collapse</div>
  </el-aside>
</template>

<script lang="ts" setup>
import logoIcon from "@/assets/png/dogLogo.png";
import sideItem from "./sideItem.vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  background-color: #001529;
}
.menu-bar {
  border: 0;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #002140;
  .title-text {
    color: #fff;
    margin-left: 10px;
    font-size: 15px;
  }
}
.collapse {
  border-top: 2px solid #335676;
  color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #001529;
}
</style>
