<template>
  <n-config-provider :theme="theme">
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import AppProvider from './components/Application.vue'
import { ref } from 'vue'
import type { GlobalTheme } from 'naive-ui'

const theme = ref<GlobalTheme | null>(null)
</script>

<style lang="scss" scoped></style>
