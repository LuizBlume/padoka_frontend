import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { db } from "../../../db";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth/auth";
import UserService from '@/services/auth/user';

export const useUserStore = defineStore('user', () => {
    const inputSignUp = reactive({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })
    const useAuth = useAuthStore();
    const router = useRouter();
    const userData = ref({});

    const getUser = () => {
        const data = useAuth.verificationAuth();
        userData.value = data;
        console.log(userData.value);
    };

    const createUser = (user) => {
        const index = (db.users[db.users.length - 1].id) + 1;
        delete user.confirmPassword;
        useAuth.createAuthentication({id: index, ...user});
        router.push({name: 'home'});
    };

    const updateUser = (user) => {
        userData.value = UserService.updateUser(user);
    };

    const deleteUser = (id) => {
        UserService.deleteUser(id);
        router.push({name: 'signIn'});
    }

    return { inputSignUp, userData, getUser, createUser, updateUser, deleteUser };
})