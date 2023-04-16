<template>
  <div class="navbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }"> 首页 </el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="http://www.4399.com">route 1</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>route 2</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="vertical-header-right">
      <div class="div-center">
        <el-icon><Search /></el-icon>
      </div>
      <div class="div-center">
        <el-badge :value="12" class="item"
          ><el-icon><Bell /></el-icon>
        </el-badge>
      </div>
      <div class="div-center">
        <el-icon><Switch /></el-icon>
      </div>
      <div class="div-center">
        <el-avatar
          :size="25"
          src="https://avatars.githubusercontent.com/u/102519374?s=40&v=4"
        />
        <p>admin</p>
      </div>
      <div class="div-center">
        <el-icon><Setting /></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.navbar {
  height: 3rem;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #d0d0d0;
}

.el-breadcrumb{
    float: left;
    margin-left: 10px;
    display: flex;
    align-items: center;
    height: 100%;
}
.vertical-header-right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  min-width: 280px;
  height: 100%;
}

.div-center {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
}

.div-center:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}

.item {
  margin-top: 10px;
  margin-right: 10px;
  transform: translateY(-15%);
}
</style>
