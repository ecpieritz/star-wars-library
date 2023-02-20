<template>
  <main class="sw-species">
    <div class="container-fluid">
      <h1>Species</h1>

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