<template>
  <f7-button
    class="applic-card__status no-click"
    small
    fill
    round
    :color="color"
  >
    <slot name="body">Default body content</slot></f7-button
  >
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000000', // Default color is black
    },
  },
}
</script>
