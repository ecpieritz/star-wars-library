<template>
  <main class="sw-people">
    <div class="container-fluid">
      <h1>People</h1>

      <p>Below is some information about:</p>

      <div class="row">
        <section class="col-lg-7 sw-table">
          <table>
            <thead>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
            </thead>
            <tbody>
              <tr v-for="(i) in people" :key="i">
                <td>{{i.name}}</td>
                <td>{{i.gender}}</td>
                <td>{{i.birth_year}}</td>
              </tr>
              
            </tbody>

          </table>
        </section>

        <aside class="col-lg-5 sw-chart">
          <PeopleChart />
        </aside>

        <section class="sw-content__text">
          <div class="row">
            <div class="col-lg-8">
              <h2>Some famous people from the saga:</h2>
              <h4>Luke Skywalker</h4>
              <p>Luke Skywalker is a fictional character and the protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. Portrayed by Mark Hamill, Luke first appeared in Star Wars (1977), and he returned in The Empire Strikes Back (1980) and Return of the Jedi (1983). Over three decades later, Hamill returned as Luke in the Star Wars sequel trilogy, cameoing in The Force Awakens (2015) before playing a major role in The Last Jedi (2017) and The Rise of Skywalker (2019). He later played a digitally de-aged version of the character in the Disney+ series The Mandalorian, appearing in the second-season finale, which premiered in 2020, and The Book of Boba Fett, in the sixth episode, released in 2022.</p>
              
              <h4>Darth Vader</h4>
              <p>Darth Vader is a fictional character in the Star Wars franchise. The character is the central antagonist of the original trilogy and, as Anakin Skywalker, is one of the main protagonists in the prequel trilogy. Star Wars creator George Lucas has collectively referred to the first six episodic films of the franchise as "the tragedy of Darth Vader". He has become one of the most iconic villains in popular culture, and has been listed among the greatest villains and fictional characters ever. His masked face is one of the most iconic character designs of all time.</p>
            </div>
            <div class="col-lg-4">
              <img src="@/assets/imgs/sw-people__content.jpg" alt="Star Wars poster">
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
import PeopleChart from '@/components/PeopleChart.vue'

export default {
  name: 'PeopleView',
  components: {PeopleChart},
  setup() {
    const people = ref([])

    const fetchPeople = async () => {
      api.get('/people').then((response) => people.value = response.data.results)
    }

    onMounted(fetchPeople)

    

    return { people }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.sw-people {
  margin-top: 14vh;
  color: $sw-white;

  @media(max-width:450px) {
    margin-top: 19vh;
  }
}
</style>