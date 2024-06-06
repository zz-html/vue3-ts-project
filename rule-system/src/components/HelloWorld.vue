<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">攻击项管理</el-menu-item>
    <el-menu-item index="2">安全云规则</el-menu-item>
    <el-menu-item index="3">支撑规则管理</el-menu-item>
    <el-menu-item index="4" disabled>规则分析</el-menu-item>
    <el-menu-item index="5" disabled>数据统计</el-menu-item>
  </el-menu>  
  <el-container>
    <el-header>Header</el-header>
    <el-main>  
      <div class="mb-4">
        Main
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
