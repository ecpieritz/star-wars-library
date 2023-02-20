<template>
  <main class="sw-planets">
    <div class="container-fluid">
      <h1>Planets</h1>

      <div class="row">
        <section class="col-lg-7 sw-table">
          <table>
            <thead>
              <th>Name</th>
              <th>Population</th>
              <th>Diameter</th>
              <th>Climate</th>
            </thead>
            <tbody>
              <tr v-for="(i) in planets" :key="i">
                <td>{{i.name}}</td>
                <td>{{i.population}}</td>
                <td>{{i.diameter}}</td>
                <td>{{i.climate}}</td>
              </tr>
              
            </tbody>

          </table>
        </section>

        <aside class="col-lg-5 sw-chart">
          <PlanetsCart />
        </aside>

      </div>
    </div>
  </main>
  </template>
  
  <script>
  import api from '@/services/api';
  import {ref, onMounted} from 'vue';
  import PlanetsCart from '@/components/PlanetsCart.vue';
  
  export default {
    name: 'planetsView',
    components: {PlanetsCart},
    setup(){
      const planets = ref([])
  
      const fetchPlanets = async ()=> api.get('/planets?limit=20').then((response)=> planets.value = response.data.results)
  
      onMounted(fetchPlanets)
  
      return{ planets}
    }
  }
  </script>
  
  <style scoped lang="scss">
  @import '@/scss/main.scss';
  
  .sw-planets{
    margin-top: 14vh;
    color: $sw-white;

    th {
      &:first-child {
        width: 25%;
      }

    }
    @media(max-width:450px){
      margin-top: 19vh;
    }
  }
  </style>