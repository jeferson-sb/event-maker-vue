<template>
  <main>
    <h1 class="heading-1">Events for {{ user.user.name }}</h1>
    <EventCard
      v-for="(event, index) in event.events"
      :key="event.id"
      :event-data="event"
      :style="`--delay: ${index * 100}ms`"
      class="slide-in-bottom"
    />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      <template v-if="hasNextPage">|</template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  </main>
</template>

<script>
import { mapState } from 'vuex'

import EventCard from '@/components/EventCard.vue'
import { store } from '@/store'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page, 10) || 1
  store
    .dispatch('event/fetchEvents', {
      page: currentPage,
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  components: {
    EventCard,
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    ...mapState(['event', 'user']),
  },
}
</script>

<style scoped>
.slide-in-bottom {
  --delay: ;
  animation: slide-in-bottom 600ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: var(--delay);
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
