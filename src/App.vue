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

.sw-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px;
  &__logo{
    width: 200px;
  }
  &__nav{
    display: flex;
    gap: 20px;
    color: $sw-white;
    a{
      color: $sw-white;
      text-decoration: none;
      &:hover{
        color: $sw-red;
        text-decoration: none;
      }
    }
  }
}
</style>
