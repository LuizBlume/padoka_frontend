import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import AuthService from '@/services/auth';
import { db } from "../../db";

export const useAuthStore = defineStore('auth', () => {
    const inputSignIn = reactive({
        email: '',
        password: ''
    });

    const userData = ref({});

    function verificationAuth() {
        const verification = AuthService.verificationAuth();
        console.log(verification);

        if (verification) {
            userData.value = verification;
            return true;
        } else {
            return false;
        };
    }

    function createAuthentication(user) {
        let isLogged = false;
        for (let register of db.users) {
            if (register.login === user.login && register.password === user.password) {
                AuthService.createAuthentication(user);
                verificationAuth();
            }
        }

        if (!isLogged) {
            return alert('Email e/ou senha incorretos!');
        }
    };

    function updateAuthentication(user) {
        const index = db.users.findIndex(id => id.login === user.login);
        const update = AuthService.updateAuthentication(user);
        userData.value = update;
    };

    function removeAuthentication() {
        AuthService.removeAuthentication();
    }

    return { inputSignIn, userData, verificationAuth, createAuthentication, updateAuthentication, removeAuthentication }
});