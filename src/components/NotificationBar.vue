<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    },
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 3000)
  },
  beforeUnmount() {
    clearTimeout(this.timeout)
  },
  methods: mapActions('notification', ['remove']),
}
</script>

<style scoped>
.notification-bar {
  margin: 1rem 0 1rem;
  box-shadow: var(--shadow-elevation-low);
  border: 2px solid var(--color-black);
  border-radius: 4px;
  padding: 0.3rem 1rem;
  transition: all 1s ease-in-out;
}
</style>
