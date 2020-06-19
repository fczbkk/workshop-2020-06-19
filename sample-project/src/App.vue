<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'Products'}">Products</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <TheCart />
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
<script>
  import TheCart from './components/TheCart'
  export default {
    components: { TheCart }
  }
</script>
