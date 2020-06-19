<template>
  <div>
    <p>Full name: {{ fullName }}</p>
    <p><input v-model="fullName"></p>
    <FullNameEditor v-model="fullName" />
  </div>
</template>

<script>
  import FullNameEditor from './FullNameEditor'
  export default {
    name: 'MyComponent',
    components: { FullNameEditor },
    data: function () {
      return {
        fullName: 'John Doe'
      }
    }
  }
</script>

<style scoped>
</style>
