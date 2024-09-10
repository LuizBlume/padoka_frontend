import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import AuthService from '@/services/auth';
import { db } from "../../../db";

export const useAuthStore = defineStore('auth', () => {
    const inputSignIn = reactive({
        email: '',
        password: ''
    });

    function verificationAuth() {
        const verification = AuthService.verificationAuth();
        console.log(verification);
    }

    function createAuthentication(user) {
        let isLogged = false;
        for (let register of db.users) {
            if (register.email === user.email && register.password === user.password) {
                AuthService.createAuthentication(user);
                verificationAuth();
            }
        }

        if (!isLogged) {
            return alert('Email e/ou senha incorretos!');
        }
    };

    // function updateAuthentication(user) {
    //     const index = db.users.findIndex(id => id.login === user.login);
    //     const update = AuthService.updateAuthentication(user);
    //     userData.value = update;
    // };

    function removeAuthentication() {
        AuthService.removeAuthentication();
    }

    return { inputSignIn, verificationAuth, createAuthentication, removeAuthentication }
});