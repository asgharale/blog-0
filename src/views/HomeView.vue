<template>
  <header-component/>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <footer-component/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
  
</style>