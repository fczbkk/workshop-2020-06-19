<template>
  <div>
    <p>data: {{ joinedName }}</p>
    <p>prop: {{ value }}</p>
    <p>
      First name:<br>
      <input v-model="firstName">
    </p>
    <p>
      Last name:<br>
      <input v-model="lastName">
    </p>
  </div>
</template>

<script>
  export default {
    name: 'FullNameEditor',
    data: function () {
      return {
        ...this.parseFullName()
      }
    },
    props: {
      value: {
        type: String,
        required: false,
        default: 'John Doe'
      }
    },
    watch: {
      value () {
        Object.assign(this, this.parseFullName())
      },
      joinedName () {
        this.sendDataToParent()
      }
    },
    methods: {
      parseFullName () {
        const [firstName = '', lastName = ''] = this.value.split(' ')
        return {
          firstName,
          lastName
        }
      },
      sendDataToParent () {
        this.$emit('input', this.joinedName)
      }
    },
    computed: {
      joinedName () {
        return [this.firstName, this.lastName]
          .filter(item => item !== '')
          .join(' ')
      }
    }
  }
</script>

<style scoped>

</style>
