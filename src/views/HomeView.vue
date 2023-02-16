<template>
  <div class="sw-home">
    <HomeBanner />
    <div class="container-fluid">
      <h1>A long time ago in a galaxy far, far away...</h1>
  
      <div class="row">
        <div class="col-lg-8">
          <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.</p>
          <p>The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology. The planets range from wealthy, planet-wide cities to deserts scarcely populated by primitive tribes. Virtually any Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet which, in most cases, teem with sentient and non-sentient alien life.] The franchise also makes use of other astronomical objects such as asteroid fields and nebulae.]] Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, holographic projections, and HoloNet (internet counterpart).</p>
        </div>
        <div class="col-lg-4">
          <img src="@/assets/imgs/sw-home__history.jpg" alt="Star Wars poster">
        </div>
      </div>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'

export default {
  name: 'HomeView',
  components: { HomeBanner
  }
}
</script>

<style scoped lang="scss">
.sw-home{
  .row{
    img{
      width: 100%;
    }
  }
}
</style>
