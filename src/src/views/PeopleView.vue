<template>
  <div class="sw-people">
    <h1>People</h1>

  </div>
</template>

<script>
import api from '@/services/api';
import {ref, onMounted} from 'vue';

export default {
  name: 'PeopleView',
  setup(){
    const people = ref([])

    const fetchPeople = async ()=> api.get('/people?limit=20').then((response)=> people.value = response.data.results)

    onMounted(fetchPeople)

    return{ people}
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.sw-people{
  margin-top: 14vh;
  color: $sw-white;
  @media(max-width:450px){
    margin-top: 19vh;
  }
}
</style>