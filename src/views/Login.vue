<template>
    <div class="home">
      <div><TopBarNotLogged/></div> <br><br><br><br>
      <div><LoginFormulario/></div>
    </div>
</template>

<script>
import LoginFormulario from '../components/LoginFormulario.vue';
import TopBarNotLogged from '../components/TopBarNotLogged.vue';

export default {
    name: 'Login',
    components: {
    LoginFormulario,
    TopBarNotLogged
}
}
</script>