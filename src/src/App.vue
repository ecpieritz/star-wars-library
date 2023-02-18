<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style lang="scss">
@import './scss/main.scss';

body{
  background-color: $sw-black;
  font-family: 'Noto Sans JP', sans-serif;
  color: $sw-white;
}
</style>
