<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <title>{{ name }}</title>
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }"></use>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
}
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-base);
  font-weight: var(--regular);
}

.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
