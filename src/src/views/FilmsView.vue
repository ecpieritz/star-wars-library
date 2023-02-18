<template>
    <div class="sw-films">
      <h1>Films</h1>
    </div>
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