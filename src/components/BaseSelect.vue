<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <select
    :id="id"
    class="field"
    v-bind="{
      ...$attrs,
    }"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option :value="label" selected>
      {{ label }}
    </option>
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <p v-if="error" class="error" aria-live="assertive">
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
}
</script>
