<template>
  <button :class="buttonClass" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style scoped>
.button {
  --color: var(--color-black);
  --bg: var(--color-primary);
  --shadow: none;
  --scale: 1;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-sm) var(--space-xxl);
  background: var(--bg);
  color: var(--color);
  border: none;
  border-radius: 6px;
  font-weight: var(--bold);
  transition: 300ms ease-out;
  transition-property: transform, box-shadow;
  transform: scale(var(--scale));
  box-shadow: var(--shadow);
  will-change: transform;
}

.button:hover {
  --scale: 1.02;
  --shadow: var(--shadow-elevation-medium);
}

.button:active {
  --scale: 1;
  --shadow: none;
}

.button:focus {
  outline: 0;
}

.button:focus-visible {
  outline: 2px dotted var(--color-primary);
  outline-offset: 5px;
}

.button--fill-gradient {
  --bg: linear-gradient(to right, #16c0b0, #84cf6a);
  --color: #fff;
}
.button:disabled {
  --scale: 1;
  --shadow: none;
  --bg: #eee;
}
.button + .button {
  margin-left: 1rem;
}
.button--fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.button--size-small {
  max-height: 32px;
}

.button--icon-right,
.button--icon-left,
.button--icon-center {
  padding: 0 var(--space-xl);
}
.button--icon-right {
  text-align: left;
}
.button--icon-right > .icon {
  margin-left: 10px;
}
.button--icon-left {
  text-align: right;
}
.button--icon-left > .icon {
  margin-right: 10px;
}
</style>
