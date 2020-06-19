<template>
  <div>
    <input v-model.number="quantity" type="number">
  </div>
</template>

<script>
  export default {
    name: 'AddToCart',
    computed: {
      quantity: {
        get () {
          return this.$store.getters.countItemsOfProduct(this.productId)
        },
        set (newValue) {
          this.$store.commit('setProductQuantity', {
            productId: this.productId,
            quantity: newValue
          })
        }
      }
    },
    props: {
      productId: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
