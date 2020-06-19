<template>
  <div>
    <h1>Dashboard</h1>

    <BoxWrapper>
      <template slot="header">
        Toto je hlavicka <a href="http://google.com">prvej komponenty</a>
      </template>
      <FirstComponent />
    </BoxWrapper>
    <BoxWrapper>
      <SecondComponent />
    </BoxWrapper>

    <FirstComponent />
    <SecondComponent />
  </div>
</template>

<script>
  import FirstComponent from './FirstComponent'
  import SecondComponent from './SecondComponent'
  import BoxWrapper from './BoxWrapper'
  export default {
    name: 'Dashboard',
    components: { BoxWrapper, SecondComponent, FirstComponent },
    data () {
      return {
        FirstComponent,
        SecondComponent
      }
    }
  }
</script>

<style scoped>

</style>
