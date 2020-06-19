<template>
  <div>
    <div>Lifecycle child</div>
    <p>{{x}}, {{y}}</p>
  </div>
</template>

<script>
  export default {
    name: 'LifecycleChild',
    data () {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      handleMouseMove (event) {
        this.x = event.pageX
        this.y = event.pageY
      }
    },
    created () {
      console.log('created')
    },
    mounted () {
      console.log('mounted')
      document.body.addEventListener('mousemove', this.handleMouseMove)
    },
    updated () {
      // console.log('updated')
    },
    destroyed () {
      console.log('destroyed')
      document.body.removeEventListener('mousemove', this.handleMouseMove)
    }
  }
</script>

<style scoped>

</style>
