<template>
  <main>
    <h1 class="heading-2">Uh-Oh!</h1>
    <h2 class="heading-4">
      It looks like you're experiencing some network issues, please click the
      back button and try again.
    </h2>
    <router-link :to="{ name: 'EventList' }">
      Or go back to the home page
    </router-link>
  </main>
</template>

<style scoped>
.heading-4 {
  font-weight: var(--normal);
  margin-bottom: var(--space-xl);
}
</style>
