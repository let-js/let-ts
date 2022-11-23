<template>
  <div class="welcome-page">
    <img style="height: 140px" src="@/assets/logo.png" alt="" />
    <h1>Welcome to Letjs！</h1>

    <h1 v-if="user.isLogin">Hi, {{ user.userName }}{{ user.genderTitle }}</h1>

    <div style="padding: auto">
      <n-space justify="center">
        <n-button
          v-if="!user.isLogin"
          type="primary"
          size="large"
          @click="login('admin', 'admin$123')"
          >登录</n-button
        >

        <n-button v-else type="primary" size="large" @click="logout()"
          >退出</n-button
        >

        <n-button
          v-if="user.isLogin"
          type="primary"
          secondary
          size="large"
          @click="showDialog"
          >show dialog!</n-button
        >
      </n-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDialog } from 'naive-ui'
import { ref, Ref, h } from 'vue'
import { useUserStore } from '@/stores/userStore'
import * as userService from '@/services/userService'
import { storeToRefs } from 'pinia'

const dialog = useDialog()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
let authList: Ref<Array<string>> = ref([])

async function login(username = '', password = '') {
  const loginUser = await userService.login({ username, password })
  authList.value = userService.getUserAuthList(loginUser)
  userStore.updateUser(loginUser)
}

async function logout() {
  await userService.logout()
  authList.value = []
  userStore.removeUser()
}

function showDialog() {
  dialog.info({
    title: 'Who am I?',
    content: () =>
      h('div', {}, [
        h('p', {}, `姓名: ${user.value.userName}`),
        h('p', {}, `用户ID: ${user.value.userId}`),
        h('p', {}, `性别: ${user.value.genderCh}`),
        h('p', {}, `你拥有${authList.value}`),
      ]),
  })
}
</script>
<style>
.welcome-page {
  padding: 3rem;
  text-align: center;
}
</style>
