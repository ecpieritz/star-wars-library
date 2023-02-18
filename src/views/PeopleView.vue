<template>
  <main class="sw-people">
    <div class="container-fluid">
      <h1>People</h1>

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
          charts
        </aside>

      </div>
    </div>
  </main>
</template>

<script>
import api from '@/services/api';
import { ref, onMounted } from 'vue';

export default {
  name: 'PeopleView',
  components: {},
  setup() {
    const people = ref([])

    const fetchPeople = async () => {
      api.get('/people').then((response) => people.value = response.data.results)
    }

    onMounted(fetchPeople)

    return { people }
  }
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