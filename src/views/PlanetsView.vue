<template>
  <main class="sw-planets">
    <div class="container-fluid">
      <h1>Planets</h1>

      <p>Below is some information about:</p>

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

        <section class="sw-content__text">
          <div class="row">
            <div class="col-lg-8">
              <h2>Some famous planets from the saga:</h2>
              <h4>Tatooine</h4>
              <p>Tatooine is a fictional desert planet that appears in the Star Wars franchise. It is a beige-colored, desolate world orbiting a pair of binary stars, and inhabited by human settlers and a variety of other life forms. The planet was first seen in the original 1977 film Star Wars, and has to date featured in a total of six Star Wars theatrical films, three live-action television series, and two animated series.

                It is the home planet of the protagonist of the Star Wars Trilogy, Luke Skywalker, and also of his father, Anakin Skywalker (Darth Vader). It is also the planet where Obi-Wan Kenobi takes up residence under the name "Ben Kenobi" in order to watch over Luke during his exile following the events of Order 66 and Anakin's fall to the dark side. Shots of the binary sunset over the Tatooine desert are considered to be an iconic image of the film series.</p>
              
              <h4>Alderaan</h4>
              <p>Alderaan is a fictional planet featured in the Star Wars franchise. It is blue-green in appearance, depicted as a terrestrial planet with humanoid inhabitants, and characterized by a peaceful culture. It is the home planet of Princess Leia Organa, one of the lead characters in the film series, as well as former Rebel shock trooper Cara Dune. In the original 1977 film,[a] Alderaan is destroyed by the Death Star's superlaser.</p>
            </div>
            <div class="col-lg-4">
              <img src="@/assets/imgs/sw-planets__content.jpg" alt="Star Wars poster">
            </div>
          </div>
        </section>
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