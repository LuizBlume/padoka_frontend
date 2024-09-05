class AuthService {
    verificationAuth() {
        const verification = JSON.parse(localStorage.getItem("login"));
        return verification;
    }

    createAuthentication(user) {
        localStorage.setItem("login", JSON.stringify(user));
    }

    updateAuthentication(user) {
        localStorage.setItem("login", JSON.stringify(user));
        const update = JSON.parse(localStorage.getItem("login"));
        return update;
    }

    removeAuthentication() {
        localStorage.removeItem("login");

        if (localStorage.getItem("login") == null) {
            return true;
        } else {
            return false;
        }
    }
};

export default new AuthService();