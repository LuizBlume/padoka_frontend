import { db } from '../../db';
import AuthService from '@/services/auth';

class UserService {
    getUser(idUser) {
        const userData = db.users.filter((user) => user.id === idUser.id);
        return userData;
    }
    createUser(user) {
        alert('Serviço de criação começado!')
        db.users.push({...user});
        AuthService.createAuthentication({id: user.id});
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