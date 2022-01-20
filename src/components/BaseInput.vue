<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <input
    v-bind="$attrs"
    :id="id"
    class="field"
    :value="modelValue"
    :placeholder="placeholder"
    :aria-describedby="error ? `${getNextID()}-error` : null"
    :aria-invalid="error ? true : null"
    :aria-readonly="readonly"
    :aria-disabled="disabled"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <p
    v-if="error"
    :id="`${getNextID()}-error`"
    class="error"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import { useUniqueID } from '@/composables/useUniqueID'

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
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const getNextID = useUniqueID

    return {
      getNextID,
    }
  },
}
</script>

<style scoped>
.error > input {
  border: 1px solid rgb(255, 70, 70);
}
</style>
