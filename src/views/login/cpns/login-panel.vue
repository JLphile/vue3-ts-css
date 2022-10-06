<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <h2>账号登录</h2>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Phone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <h2>手机登录</h2>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
.title {
  text-align: center;
}
</style>
