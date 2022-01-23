<template>
  <main>
    <h1 class="heading-2">Oops!</h1>
    <h2 class="heading-3">
      The {{ resource }} you're looking for is not here.
    </h2>
    <router-link :to="{ name: 'EventList' }">Go back home</router-link>
  </main>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      default: 'resource',
    },
  },
}
</script>

<style scoped>
.heading-3 {
  margin-bottom: var(--space-xl);
}
</style>
