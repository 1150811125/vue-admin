<script setup lang="ts">
import setting from '@/setting'

import useLayoutSettingStore from '@/store/modules/setting'

let LayoutSettingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<template>
  <div class="logo" v-if="setting.logoHiddle">
    <img :src="setting.logo" alt="" />
    <p v-show="!LayoutSettingStore.foldDelay">{{ setting.title }}</p>
  </div>
</template>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
