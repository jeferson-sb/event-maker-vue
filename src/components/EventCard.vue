<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: eventData.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">{{ formattedDatetime }}</span>
      <h4 class="title">{{ eventData.title }}</h4>
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
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.event-card > .title {
  margin: 0;
}

.event-link {
  display: inline-block;
  width: 100%;
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
