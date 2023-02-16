<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {Header}
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
