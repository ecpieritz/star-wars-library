<template>
  <main class="sw-films">
    <div class="container-fluid">
      <h1>Films</h1>

      <p>Below is some information about:</p>

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
          <FilmsChart />
        </aside>

        <section class="sw-content__text">
          <div class="row">
            <div class="col-lg-8">
              <h2>About some movies:</h2>
              <h4>The Empire Strikes Back</h4>
              <p>Is a 1980 American epic space opera film directed by Irvin Kershner from a screenplay by Leigh Brackett and Lawrence Kasdan, based on a story by George Lucas. The sequel to Star Wars (1977), it is the second film in the Star Wars film series and the fifth chronological chapter of the "Skywalker Saga".</p>
              
              <h4>Return of the Jedi</h4>
              <p>Is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. The sequel to Star Wars (1977) and The Empire Strikes Back (1980), it is the third installment in the original Star Wars trilogy, the third film to be produced, and the sixth chronological film in the "Skywalker Saga".</p>
            </div>
            <div class="col-lg-4">
              <img src="@/assets/imgs/sw-films__content.jpg" alt="Star Wars poster">
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
import FilmsChart from '@/components/FilmsChart.vue';

export default {
  name: 'FilmsView',
  components:{FilmsChart},
  setup(){
    const films = ref([])

    const fetchFilms = async ()=> api.get('/films').then((response)=> films.value = response.data.results)

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