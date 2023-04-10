<template>
    <div class="center">
        <img alt="Juan Escutia" src="../assets/juan-escutia2.jpeg">
        <div class="row">
            <div class="column">
                <h1>Nombre Completo</h1>
                <p>{{ name }}</p>
            </div>
            <div class="column">
                <h1>Matrícula</h1>
                <p>{{ userMat }}</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h1>Correo Institucional</h1>
                <p>{{ email }}</p>
            </div>
            <div class="column">
                <h1>Carrera</h1>
                <p>ISC</p>
            </div>
            <div class="row">
                <div class="column">
                    <h1>Correo Personal</h1>
                    <p>{{ userPersonalEmail }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { doc, getFirestore, getDoc } from "@firebase/firestore";
    import { getAuth } from "firebase/auth";
    export default {
        name: 'HelloWorld',
            async mounted(){
                this.auth = getAuth()
                this.user = this.auth.currentUser
                this.email = this.user.email
                this.db = getFirestore()
                this.userDocument = await getDoc(doc(this.db, "UserInfo", this.email))
                this.name = this.userDocument.data().name
                this.userPersonalEmail = this.userDocument.data().personalEmail
                this.userMat = this.userDocument.data().mat
            },
        props: {
            msg: String
        },
        data() {
            return {
                auth: "",
                db: "",
                userDocument: "",
                user: "",
                name: "",
                email: "",
                userPersonalEmail: "",
                userMat: "",
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    h1 {
        color: #384ffe;
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
       color: #42b983;
    }
    img {
        border-radius: 50%;
    }
    .float-container {
          padding: 20px;
    }
    .column {
        float: left;
        width: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    p {
        font-size: 24px;
    }
    .center {
        margin: auto;
        width: 80%;
        padding: 10px;
        text-align: center;
    }
</style>
