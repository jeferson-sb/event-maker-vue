<template>
  <main>
    <h1>Create an Event</h1>
    <form @submit="onSubmit">
      <BaseSelect
        id="category"
        v-model="category"
        label="Select a category"
        :options="categories"
        :error="errors.category"
        aria-label="Choose a category for your event"
      />

      <h2>Name & describe your event</h2>
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

      <h2>Where is your event?</h2>
      <BaseInput
        id="location"
        v-model="location"
        label="Location"
        type="text"
        placeholder="Add a Location"
        :error="errors.location"
      />

      <h2>When is your event?</h2>
      <BaseInput
        id="datetime"
        v-model="datetime"
        type="datetime-local"
        name="datetime"
        label="Datetime"
        aria-label="Choose a date and time for your event"
        :error="errors.datetime"
      />

      <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
    </form>
  </main>
</template>

<script>
import NProgress from 'nprogress'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { object, string, date as YupDate } from 'yup'

export default {
  setup() {
    const categories = ref([
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'tech',
      'food',
      'community',
      'business',
    ])

    const store = useStore()
    const router = useRouter()

    const validationSchema = object({
      category: string().required(),
      title: string().required().min(8),
      description: string().required(),
      location: string(),
      datetime: YupDate().default(function () {
        return new Date()
      }),
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

    return {
      onSubmit,
      categories,
      category,
      title,
      description,
      location,
      datetime,
      errors,
    }
  },
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
.errorMessage {
  color: rgb(255, 70, 70);
}
</style>
