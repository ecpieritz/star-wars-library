<template>
  <footer class="sw-footer">
      <p>Made with 💙 by <a href="https://github.com/ecpieritz" target="_blank" rel="noopener noreferrer">Emilyn C. Pieritz</a></p>
  </footer>
</template>
  
<script>
export default {
  name: 'footerComponent',
  props: {}
}
</script>
  
<style scoped lang="scss">
  @import '@/scss/main.scss';

  .sw-footer{
    background-color: $sw-yellow;
    padding: 10px 120px;
    text-align: end;
    color: $sw-black;
    a{
      font-weight: 700;
      color: $sw-black;
      &:hover{
        text-decoration: none;
        color: $sw-blue;
      }
    }
    p{
      margin: 0;
    }
    @media(max-width:780px){
      padding: 20px;
    }
    @media(max-width:450px){
      text-align: center;
    }
  }
</style>
