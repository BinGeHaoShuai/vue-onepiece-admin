<template>
  <div class="fixed-header">
    <navbar></navbar>
    <div>
      <div class="flex items-center">
        <el-avatar
          class="mr-3"
          :size="32"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
          Sub title
        </span>
        <el-tag>Default</el-tag>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import navbar from "./components/navbar.vue";
</script>

<style lang="scss" scoped>
.fixed-header {
  position: relative;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 998;
}

</style>
