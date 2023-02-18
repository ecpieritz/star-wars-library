<template>
  <main class="sw-films">
    <div class="container-fluid">
      <h1>People</h1>

      <div class="row">
        <section class="col-lg-7 sw-table">
          <table>
            <thead>
              <th>Title</th>
              <th>Director</th>
              <th>Release Date</th>
            </thead>
            <tbody>
              <tr v-for="(i) in films" :key="i">
                <td>{{i.title}}</td>
                <td>{{i.director}}</td>
                <td>{{i.release_date}}</td>
              </tr>
              
            </tbody>

          </table>
        </section>

        <aside class="col-lg-5 sw-chart">
          charts
        </aside>

      </div>
    </div>
  </main>
  </template>
  
  <script>
import api from '@/services/api';
import {ref, onMounted} from 'vue';

export default {
  name: 'FilmsView',
  setup(){
    const films = ref([])

    const fetchFilms = async ()=> api.get('/films?limit=20').then((response)=> films.value = response.data.results)

    onMounted(fetchFilms)

    return{ films}
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.sw-films{
  margin-top: 14vh;
  color: $sw-white;
  @media(max-width:450px){
    margin-top: 19vh;
  }
}
</style>