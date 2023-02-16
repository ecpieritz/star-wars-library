<template>
  <div class="sw-home-banner">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/imgs/sw-banner__darkside.jpg" class="d-block w-100" alt="Darkside">
        </div>
        <div class="carousel-item">
          <img src="../assets/imgs/sw-banner__jedi.jpg" class="d-block w-100" alt="Jedi">
        </div>
        <div class="carousel-item">
          <img src="../assets/imgs/sw-banner__rebels.jpg" class="d-block w-100" alt="Rebels">
        </div>
      </div>
    </div>
</div>
</template>
  
<script>
export default {
  name: 'HomeBanner',
  props: {}
}
</script>
  
<style scoped lang="scss"></style>
  