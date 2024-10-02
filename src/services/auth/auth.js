import { db } from "../../../db";

class AuthService {
    verificationAuth() {
        const verification = JSON.parse(localStorage.getItem("login"));
        if (verification == null) {
            return false;
        }
        if (!db.users[verification.id]) {
            db.users.push(verification);
            return verification;
        };
    }

    createAuthentication(user) {
        localStorage.setItem("login", JSON.stringify(user));
    }

    removeAuthentication() {
        localStorage.removeItem("login");
    }
};

export default new AuthService();