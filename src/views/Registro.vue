<template>
    <div class="home">
      <div><TopBarNotLogged/></div> <br><br><br><br>
      <div><RegistroFormulario/></div>
    </div>
  </template>
  
<script>
  import RegistroFormulario from '../components/RegistroFormulario.vue';
  import TopBarNotLogged from '../components/TopBarNotLogged.vue';
  
  export default {
    name: 'Registro',
    components: {
    RegistroFormulario,
    TopBarNotLogged
}
  }
</script>
  
<style scoped>
  h1 {
    color: #384ffe;
    margin: 40px 0 0;
  }
</style>