<template>
    <div class="home">
      <div><TopBar/></div> <br><br><br><br>
      <div><ListaMaterias/></div>
    </div>
  </template>
  
  <script>
  import TopBar from '../components/TopBar.vue';
  import ListaMaterias from '../components/ListaMaterias.vue';
  
  export default {
    name: 'Materias',
    components: {
      TopBar,
      ListaMaterias
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: #384ffe;
    margin: 40px 0 0;
  }
  </style>