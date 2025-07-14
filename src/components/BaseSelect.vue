<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <select
    :id="id"
    class="field"
    v-bind="{
      ...$attrs,
    }"
    :value="modelValue"
    :aria-invalid="error ? true : null"
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

<style scoped>
label {
  font-weight: var(--bold);
  color: hsla(0, 0%, 0%, 0.7);
}

.field {
  width: 100%;
  min-height: 50px;
  padding: 0 24px 0 10px;
  border: 1px solid hsla(0, 0%, 0%, 0.4);
  font-size: var(--text-lg);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
}

.error ~ input,
[aria-invalid='true'] {
  border: 1px solid var(--color-error);
}

.error {
  color: var(--color-error);
}
</style>
