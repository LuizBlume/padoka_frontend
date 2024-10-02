import { db } from "../../../db";
import AuthService from '@/services/auth/auth';

class UserService {
    getUser(idUser) {
        const userData = db.users.filter((user) => user.id === idUser);
        return userData;
    }
    createUser(user) {
        AuthService.createAuthentication({...user});
    }
    updateUser(user) {
        db.users[user.id - 1] = {user}
        return db.users[user.id - 1]
    }
    deleteUser(id) {
        db.users.splice(id - 1, 1);
        return true;
    }
}

export default new UserService();