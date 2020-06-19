<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header">No header</slot>
    </div>
    <div class="content">

      <slot>No content</slot>

    </div>
    <div class="header">
      <slot name="header">No header</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BoxWrapper'
  }
</script>

<style scoped>
  .wrapper {
    margin: 1em;
  }
  .header {
    padding: 0.25em 1em;
    background: red;
    color: white;
  }
  .content {
    border: 1em solid red;
    background: white;
    padding: 1em;
  }
</style>
