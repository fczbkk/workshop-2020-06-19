<template>
  <div>
    <h2>{{ productData.title }}</h2>
    <p>{{ productData.description }}</p>
    <p>{{ productData.price }}</p>
    <AddToCart :product-id="productData.id" />
    <AddToCart :product-id="productData.id" />
    <p>
      <router-link :to="{name: 'ProductDetail', params: {product_id: productData.id}}">Show product details</router-link>
    </p>
  </div>
</template>

<script>
  import AddToCart from '../components/AddToCart'
  export default {
    name: 'ProductItem',
    components: { AddToCart },
    props: {
      productData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
