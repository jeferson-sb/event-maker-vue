<template>
  <nav class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <ul id="links">
      <router-link :to="{ name: 'EventList' }">List</router-link>
      |
      <router-link :to="{ name: 'EventCreate' }">Create</router-link>
    </ul>
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;
}
.nav > .brand {
  font-weight: var(--bold);
  font-size: var(--text-xl);
  color: var(--color-primary);
  text-decoration: none;
}
#links a {
  margin: 0 5px;
  color: var(--color-black);
  text-decoration: none;
}
#links a.router-link-active {
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
}
</style>
