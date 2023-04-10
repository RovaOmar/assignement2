<template>
    <header>
        <img alt="Logo Tec" src="../assets/logoTec.png">
        <nav>
            <ul>
                <li>
                    <router-link to="/Login">INICIAR SESIÓN</router-link>
                </li>
                <li>
                    <router-link to="/Registro">REGISTRASE</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}
</script>

<style scoped type=text/css>   
body   
{  
    height: 125vh;  
    margin-top: 80px;  
    padding: 30px;  
    background-size: cover;  
    font-family: sans-serif;  
}  
header {  
    background-color: #384ffe;  
    position: fixed;  
    left: 0;  
    right: 0;  
    top: 0;  
    height: 7%;  
    display: flex;  
    align-items: center;  
    box-shadow: 0 0 25px 0 black;  
}  
header * {  
    display: inline;  
}  
header li {  
    margin: 20px;  
}  
header li a {  
    color: rgb(255, 255, 255);  
    text-decoration: none;  
}  
img {
    height: 50px;
}
</style>   