import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { db } from "../../../db";
import AuthService from '@/services/auth/auth';

export const useAuthStore = defineStore('auth', () => {
    const inputSignIn = reactive({
        email: '',
        password: ''
    });

    const verificationAuth = () => {
        const verification = AuthService.verificationAuth();
        return verification;
    }

    const createAuthentication = (user) => {
        let isLogged = false;
        for (let register of db.users) {
            if (register.email === user.email && register.password === user.password) {
                AuthService.createAuthentication(user);
                isLogged = true;
            }
        }
        if (!isLogged) {
            return alert('Email e/ou senha incorretos!');
        }
    };

    const removeAuthentication = () => {
        AuthService.removeAuthentication();
    }

    return { inputSignIn, verificationAuth, createAuthentication, removeAuthentication }
});