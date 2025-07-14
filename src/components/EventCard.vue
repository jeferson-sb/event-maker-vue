<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: eventData.id } }"
  >
    <div class="event-card">
      <time class="event-datetime">{{ formattedDatetime }}</time>
      <h2 class="heading-4">{{ eventData.title }}</h2>
      <BaseIcon name="users">
        <span v-if="eventData.attendees.length">
          {{ eventData.attendees.length }} attending
        </span>
        <span v-else>No users attending yet</span>
      </BaseIcon>
    </div>
  </router-link>
</template>

<script>
import { formatDateTime } from '@/composables/date'

export default {
  props: {
    eventData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDatetime() {
      return formatDateTime(this.eventData.datetime)
    },
  },
}
</script>

<style scoped>
.event-card {
  padding: var(--space-lg);
  margin-bottom: 24px;
  transition: all 300ms linear;
  cursor: pointer;
  box-shadow: var(--shadow-elevation-medium);
  will-change: transform, box-shadow;
  transform: perspective(1px) translateZ(0);
}

.event-card:hover {
  transform: scale(1.01);
  backface-visibility: hidden;
  box-shadow: var(--shadow-elevation-high);
}
.event-link {
  display: inline-block;
  width: 100%;
  color: var(--color-black);
  text-decoration: none;
}

.event-datetime {
  font-size: var(--text-xl);
}
</style>
