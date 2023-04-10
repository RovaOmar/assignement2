<template>
    <v-container class="pa-10" style="max-width: 875px">
      <v-row class="d-flex align-center justify-center">
        <v-col class="auto">
          <h1 class="text-h3 text-center font-weight-bold" style="color: #384FFE">
            CREA UNA CUENTA
          </h1>
        </v-col>
      </v-row>
        <form @submit.prevent="pressed">
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Nombre Completo" v-model="userName" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Matrícula" v-model="userMat" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Correo Insitucional" v-model="email" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Correo Personal" v-model="userPersonaEmail" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Contraseña" v-model="password" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-text-field class="blue" label="Confirmar Contraseña" variant="outlined"></v-text-field>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-btn type="submit" color="#384FFE"><b style='color: white'>Registrarse</b></v-btn>
            </v-row>
        </form>
    </v-container>
</template>
  
  
<script>
    import * as firebase from "firebase/app";
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { collection, addDoc, setDoc, doc } from "firebase/firestore";
    import { getFirestore } from "firebase/firestore";
    export default {
        methods: {
            pressed(){
                this.createDocument()
                this.createUser()
                this.pressed2()
            },

            pressed2(){
                this.createDocument()
                this.createUser()
            },

            createUser(){
                this.auth = getAuth()
                createUserWithEmailAndPassword(this.auth, this.email, this.password)
            },

            createDocument(){
                this.db = getFirestore()
                this.dataObject.name = this.userName
                this.dataObject.mat = this.userMat
                this.dataObject.personalEmail = this.userPersonaEmail

                setDoc(doc(this.db, "UserInfo", this.email),{
                    mat: this.userMat,
                    name: this.userName,
                    personalEmail: this.userPersonaEmail
                })
            }
        },
        data() {
            return {
                auth: "",
                db: "",
                email: "",
                password: "",
                userName: "",
                userMat: "",
                userPersonaEmail: "",
                dataObject : {
                        name: "",
                        mat: "",
                        personalEmail: ""
                }
            }
        }
    }
</script>
  
<style scoped>
    .blue {
        color: #384FFE;
    }
</style>
  