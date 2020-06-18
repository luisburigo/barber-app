import Axios from "axios";

const {REACT_APP_URL_API: baseUrl} = process.env;
const TOKEN_KEY = "TOKEN";

class AuthService {

    async login(email, senha) {
        const {data} = await Axios.post(`${baseUrl}/auth/login`, {email, senha});
        const {token} = data.content;
        localStorage.setItem(TOKEN_KEY, token);
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }

    get hasToken() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

    get token() {
        return localStorage.getItem(TOKEN_KEY);
    }
}

export default new AuthService;
