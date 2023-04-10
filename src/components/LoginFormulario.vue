<template>
    <v-container class="pa-10" style="max-width: 875px">
      <v-row class="d-flex align-center justify-center">
        <v-col class="auto">
          <h1 class="text-h3 text-center font-weight-bold" style="color: #384FFE">
            INICIO DE SESIÓN
          </h1>
        </v-col>
      </v-row>
        <form @submit.prevent="pressed">
                <v-row class="d-flex align-center justify-center">
                    <v-text-field class="blue" label="Correo Institucional" v-model="email" variant="outlined"></v-text-field>
                </v-row>
                <v-row class="d-flex align-center justify-center">
                    <v-text-field class="blue" label="Contraseña" v-model="password" variant="outlined"></v-text-field>
                </v-row>
                <v-row class="d-flex align-center justify-center">
                <v-btn type="submit" color="#384FFE"><b style='color: white'>Iniciar Sesión</b></v-btn>
            </v-row>
        </form>
    </v-container>
</template>

<script>
    import * as firebase from "firebase/app";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { collection, addDoc, setDoc, doc } from "firebase/firestore";
    import { getFirestore } from "firebase/firestore";
    import router from "../router";
    export default {
        methods: {
            pressed(){
                this.auth = getAuth()
                signInWithEmailAndPassword(this.auth, this.email, this.password)
                // this.user = this.auth.currentUser
                // alert(this.user.email)
                router.push("/Inicio")
            },
        },
        data() {
            return {
                auth: "",
                db: "",
                user: "",
                email: "",
                password: "",
            }
        }
    }
</script>

<style scoped>
    .blue {
        color: #384FFE;
    }
</style>