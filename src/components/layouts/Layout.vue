<template>
  <n-layout style="height: 100%">
    <n-layout-header class="header">
      <div class="logo-container">
        <router-link :to="'/'"
          ><img style="height: 40px" src="../../assets/logo.png"
        /></router-link>
      </div>
    </n-layout-header>
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer position="absolute" class="footer"
      >I am a naughty footer</n-layout-footer
    >
  </n-layout>
</template>
<style lang="scss" scoped>
.header {
  height: 64px;
  padding-left: 0.8rem;
  display: flex;
  border-bottom: solid rgba(60, 60, 67, 0.12) 1px;
}
.logo-container {
  height: 100%;
  line-height: 100%;
  display: flex;
  align-items: center;
  a {
    height: 40px;
  }
}

.footer {
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 1rem;
  bottom: 0;
}
</style>
