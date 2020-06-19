<template>
  <div>
    <h1>Products list</h1>
    <ProductItem
      v-for="(productData) of productsList"
      :key="productData.id"
      :product-data="productData"
    />
  </div>
</template>

<script>
  import ProductItem from '../Product/ProductItem'
  export default {
    name: 'Products',
    components: { ProductItem },
    data () {
      return {
        productsList: []
      }
    },
    beforeRouteEnter (to, from, next) {
      fetch(`http://localhost:3000/products/`)
        .then((response) => response.json())
        .then((data) => next(
          (vm) => vm.productsList = data)
        )
    }
  }
</script>

<style scoped>

</style>
