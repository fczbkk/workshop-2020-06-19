<template>
  <div>
    <h1>Lifecycle methods</h1>
    <p>
      <input type="checkbox" v-model="doesExist"> Child component does exist
    </p>
    <LifecycleChild v-if="doesExist" />
  </div>
</template>

<script>
  import LifecycleChild from './LifecycleChild'
  export default {
    name: 'Lifecycle',
    components: { LifecycleChild },
    data () {
      return {
        doesExist: true
      }
    }
  }
</script>

<style scoped>

</style>
