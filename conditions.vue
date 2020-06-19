<template>
  <div>

    <p><label>
      <input type="checkbox" v-model="isVisible">
      cash only {{ isVisible }}
    </label></p>


    <div v-if="isVisible">
    <div
      v-if="isVisible || type==='cash'"
      v-for="({ammount, name, type}, key) of payments"
      :key="key"
    >
      {{ ammount }} ({{ name }})
    </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Conditions',
    data () {
      return {
        isVisible: true,
        payments: {
          '123': {
            ammount: 100,
            type: 'cash',
            name: 'Hotovost'
          },
          '456': {
            ammount: 500,
            type: 'card',
            name: 'Bezhotovostne'
          },
          '789': {
            ammount: 1000,
            type: 'cash',
            name: 'Hotovost'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
