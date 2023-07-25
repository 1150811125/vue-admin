<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <Fold v-show="LayoutSettingStore.fold" />
    <Expand v-show="!LayoutSettingStore.fold" />
  </el-icon>
  <!-- 右侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示的路由标题 -->
      <span style="margin: 0 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let route = useRoute()
let LayoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold
  if (!LayoutSettingStore.foldDelay) {
    LayoutSettingStore.foldDelay = !LayoutSettingStore.foldDelay
  } else {
    setTimeout(() => {
      LayoutSettingStore.foldDelay = !LayoutSettingStore.foldDelay
    }, 300)
  }
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
