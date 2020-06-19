<template>
  <div>
    <h1>Product detail</h1>
    <ProductItem :product-data="productData" />
  </div>
</template>

<script>
  import ProductItem from '../Product/ProductItem'
  export default {
    name: 'ProductDetail',
    components: { ProductItem },
    data () {
      return {
        productData: {}
      }
    },
    beforeRouteEnter (to, from, next) {
      fetch(`http://localhost:3000/products/${ to.params.product_id }`)
        .then((response) => response.json())
        .then((data) => next(
          (vm) => vm.productData = data)
        )
    }
  }
</script>

<style scoped>

</style>
