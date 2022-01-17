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
  margin: 1em 0 1em;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border: 2px solid #303030;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  transition: all 1s ease-in-out;
}
</style>
