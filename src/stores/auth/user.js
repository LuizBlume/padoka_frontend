import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { db } from "../../../db";
import { useRouter } from "vue-router";
import UserService from '@/services/user';

export const useUserStore = defineStore('user', () => {
    const inputSignUp = reactive({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const userData = ref({});
    const router = useRouter();

    const getUser = () => {
        const idStorage = JSON.parse(localStorage.getItem("login"));
        userData.value = UserService.getUser(idStorage.id);
    };

    const createUser = (user) => {
        const index = (db.users[db.users.length - 1].id) + 1;
        alert(index);
        delete user.confirmPassword;
        UserService.createUser({id: index, ...user});
        router.push({name: 'home'});
        console.log(db.users);
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