class AuthService {
    verificationAuth() {
        const verification = JSON.parse(localStorage.getItem("login"));
        return typeof(verification.id) === 'number';
    }

    createAuthentication(user) {
        localStorage.setItem("login", JSON.stringify(user));
    }

    removeAuthentication() {
        localStorage.removeItem("login");
    }
};

export default new AuthService();