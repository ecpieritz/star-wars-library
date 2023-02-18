<template>
    <div class="sw-planets">
      <h1>Planets</h1>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  import {ref, onMounted} from 'vue';
  
  export default {
    name: 'planetsView',
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
    @media(max-width:450px){
      margin-top: 19vh;
    }
  }
  </style>