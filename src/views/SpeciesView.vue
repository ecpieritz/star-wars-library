<template>
  <main class="sw-species">
    <div class="container-fluid">
      <h1>Species</h1>

      <p>Below is some information about:</p>

      <div class="row">
        <section class="col-lg-7 sw-table">
          <table>
            <thead>
              <th>Name</th>
              <th>Classification</th>
              <th>Designation</th>
            </thead>
            <tbody>
              <tr v-for="(i) in species" :key="i">
                <td>{{i.name}}</td>
                <td>{{i.classification}}</td>
                <td>{{i.designation}}</td>
              </tr>
              
            </tbody>

          </table>
        </section>

        <aside class="col-lg-5 sw-chart">
          <SpeciesChart />
        </aside>

        <section class="sw-content__text">
          <div class="row">
            <div class="col-lg-8">
              <h2>Some famous species from the saga:</h2>
              <h4>Wookie</h4>
              <p>Wookiees are fictional humanoid aliens in the Star Wars universe, native to the forest planet Kashyyyk. They are distinguished from humans by their gigantism, hirsutism, and physical strength. The most prominent Wookiee is Chewbacca, co-pilot of the Millennium Falcon alongside his best friend Han Solo.</p>

              <h4>Sith</h4>
              <p>The Sith (also known as Red Sith during the time of the Old Sith Empire and Sith Purebloods during the time of the resurgent Sith Empire) were the native species of the planet Korriban. They had red skin and tentacle "beards", and had a natural talent for mastering the Force as well as their magic and alchemy. Naturally cruel and manipulative, the Sith spread throughout the outer rim in the early days of the Old Republic, eventually centering their empire on Korriban. Some time after the Great Schism, several refugee Dark Jedi settled on the planet.</p>
            </div>
            <div class="col-lg-4">
              <img src="@/assets/imgs/sw-species__content.jpg" alt="Star Wars poster">
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
  
<script>
import api from '@/services/api';
import { ref, onMounted } from 'vue';
import SpeciesChart from '@/components/SpeciesChart.vue'

export default {
  name: 'speciesView',
  components: {SpeciesChart},
  setup() {
    const species = ref([])

    const fetchSpecies = async () => api.get('/species?limit=20').then((response) => species.value = response.data.results)

    onMounted(fetchSpecies)

    return { species }
  }
}
</script>
  
<style scoped lang="scss">
@import '@/scss/main.scss';

.sw-species {
  margin-top: 14vh;
  color: $sw-white;

  @media(max-width:450px) {
    margin-top: 19vh;
  }
}
</style>