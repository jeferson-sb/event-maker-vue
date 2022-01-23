<template>
  <main>
    <header class="event-header">
      <time class="event-datetime">
        <BaseIcon name="clock">
          {{ formattedDatetime }}
        </BaseIcon>
      </time>
      <h1 class="heading-2">{{ event.title }}</h1>
      <strong>Organized by {{ event?.organizer?.user?.name }}</strong>
      <p>Category: {{ event.category }}</p>
    </header>

    <BaseIcon name="map">
      <h2 class="heading-3">Location</h2>
    </BaseIcon>
    <address>{{ event.location }}</address>

    <BaseIcon name="file-text">
      <h2 class="heading-3">Event details</h2>
    </BaseIcon>
    <p>{{ event.description }}</p>

    <BaseIcon name="users">
      <h2 class="heading-3">
        Attendees
        <span class="badge badge--fill-gradient">
          {{ event.attendees ? event.attendees.length : 0 }}
        </span>
      </h2>
    </BaseIcon>

    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </main>
</template>

<script>
import { formatDateTime } from '@/composables/date'

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDatetime() {
      return formatDateTime(this.event.datetime)
    },
  },
}
</script>

<style scoped>
.event-header {
  margin-bottom: var(--space-xl);
}

main > .icon-wrapper {
  margin-top: var(--space-xl);
}

.event-datetime {
  color: var(--color-gray);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 5px;
  border-radius: 50%;
  font-size: var(--text-xsm);
  font-weight: var(--regular);
  vertical-align: middle;
}
.badge--fill-gradient {
  background: linear-gradient(to right, hsl(174, 79%, 42%), hsl(105, 51%, 61%));
  color: #fff;
}

.list-group > .list-item {
  padding: 1em 0;
  border-bottom: 1px solid #e5e5e5;
}
</style>
