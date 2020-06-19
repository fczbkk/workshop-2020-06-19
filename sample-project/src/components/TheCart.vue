<template>
  <div>The cart: {{ productsCount }} ({{ itemsCount }})</div>
</template>

<script>
  export default {
    name: 'TheCart',
    computed: {
      productsCount () {
        return this.$store.getters.countProductsInCart
      },
      itemsCount () {
        return this.$store.getters.countItemsInCart
      }
    }
  }
</script>

<style scoped>

</style>
