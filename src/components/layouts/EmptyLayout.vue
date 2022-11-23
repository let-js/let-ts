<template>
  <n-layout class="empty-layout">
    <n-layout-header class="header">
      <div class="logo-container">
        <router-link :to="'/'"
          ><img style="height: 40px" src="../../assets/logo.png"
        /></router-link>
      </div>
    </n-layout-header>
    <n-layout-content> <router-view></router-view> </n-layout-content>
    <n-layout-footer>Footer</n-layout-footer>
  </n-layout>
</template>

<script setup></script>

<style lang="scss" scoped>
.empty-layout {
  width: 100%;
  height: 100%;
  :deep(.n-layout-scroll-container) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .n-layout {
    flex-grow: 1;
  }
  .n-layout-footer {
    padding: 20px 0;
    text-align: center;
  }

  .header {
    height: 64px;
    padding-left: 0.8rem;
    display: flex;
    border-bottom: solid rgba(60, 60, 67, 0.12) 1px;
    .logo-container {
      height: 100%;
      line-height: 100%;
      display: flex;
      align-items: center;
      a {
        height: 40px;
      }
    }
  }
}
</style>
