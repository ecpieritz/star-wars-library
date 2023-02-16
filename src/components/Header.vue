<template>
  <header class="sw-header">
    <img class="sw-header__logo" src='../assets/imgs/sw-logo.png' alt="Star Wars logo">

    <nav class="sw-header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/films">Films</router-link>
      <router-link to="/species">Species</router-link>
      <router-link to="/planets">Planets</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {}
}
</script>

<style scoped lang="scss">
</style>
