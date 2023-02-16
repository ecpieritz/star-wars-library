<template>
  <header class="sw-header">
    <div>
      <img class="sw-header__logo" src='../assets/imgs/sw-logo.png' alt="Star Wars logo">

      <nav class="sw-header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="/people">People</router-link>
        <router-link to="/films">Films</router-link>
        <router-link to="/species">Species</router-link>
        <router-link to="/planets">Planets</router-link>
      </nav>
    </div>
</header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {}
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.sw-header {
  position: fixed;
  top: 0;
  z-index: 2;

  div {
    padding: 20px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:780px){
      padding: 20px;
    }
    @media(max-width:450px){
      flex-direction: column;
      align-items:flex-start;
    }
  }

  &__logo {
    width: 200px;
  }

  &__nav {
    display: flex;
    gap: 20px;
    color: $sw-white;
    margin-left: 60vw;
    a {
      color: $sw-white;
      text-decoration: none;

      &:hover {
        color: $sw-red;
        text-decoration: none;
      }
    }
    @media(max-width:1024px){
      margin-left: 26vw;
    }
    @media(max-width:780px){
      margin-left: 23vw;
    }
    @media(max-width:450px){
      margin-left: auto;
      margin-top: 15px;
    }
  }
}
</style>
