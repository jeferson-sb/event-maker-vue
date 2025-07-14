<template>
  <NavBar />
  <NotificationContainer />
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NavBar,
    NotificationContainer,
  },
}
</script>

<style>
@import '@/assets/styles/base.css';
</style>
