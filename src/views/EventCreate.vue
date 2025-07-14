<template>
  <main>
    <h1 class="heading-2">Create an Event</h1>
    <form @submit="onSubmit">
      <BaseSelect
        id="category"
        v-model="category"
        label="Select a category"
        :options="store.state.categories"
        :error="errors.category"
        aria-label="Choose a category for your event"
      />

      <h2 class="heading-3">Name and describe your event</h2>
      <BaseInput
        id="title"
        v-model="title"
        type="text"
        label="Title"
        placeholder="Web Development 101"
        :error="errors.title"
      />

      <BaseInput
        id="description"
        v-model="description"
        label="Description"
        type="text"
        placeholder="My web development meeting talk"
        :error="errors.description"
      />

      <h2 class="heading-3">Where is your event?</h2>
      <BaseInput
        id="location"
        v-model="location"
        label="Location"
        type="text"
        placeholder="Add a Location"
        :error="errors.location"
      />

      <h2 class="heading-3">When is your event?</h2>
      <BaseInput
        id="datetime"
        v-model="datetime"
        type="datetime-local"
        name="datetime"
        label="Datetime"
        aria-label="Choose a date and time for your event"
        :error="errors.datetime"
      />

      <BaseButton type="submit" class="button--fill-gradient">
        Submit
      </BaseButton>
    </form>
  </main>
</template>

<script setup>
import NProgress from 'nprogress'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { object, string, date } from 'yup'

const store = useStore()
const router = useRouter()

const validationSchema = object({
  category: string().required(),
  title: string().required().min(8),
  description: string().required(),
  location: string().required(),
  datetime: date().default(() => new Date()),
})

const { errors, handleSubmit } = useForm({
  validationSchema,
})

const { value: category } = useField('category')
const { value: title } = useField('title')
const { value: description } = useField('description')
const { value: location } = useField('location')
const { value: datetime } = useField('datetime')

const onSubmit = handleSubmit(async event => {
  try {
    NProgress.start()

    await store.dispatch('event/createEvent', {
      ...event,
      organizer: store.state.user,
      attendees: [],
    })

    router.push({
      name: 'EventList',
    })
  } catch (error) {
    NProgress.done()
  }
})
</script>

<style scoped>
[class^='heading'] {
  margin-top: var(--space-xl);
}

:deep(label) {
  margin-top: var(--space-sm);
}

.button {
  margin-top: var(--space-sm);
}
</style>
