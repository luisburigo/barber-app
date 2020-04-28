import Axios from "axios";
import AuthService from "./AuthService";
import {history} from "../routes"

const {REACT_APP_URL_API} = process.env;

const api = Axios.create({
    baseURL: `${REACT_APP_URL_API}`,
});

api.interceptors.request.use(
    value => {
        value.headers['X-AUTH-TOKEN'] = `Bearer ${AuthService.token}`;
        return value;
    }
);

api.interceptors.response.use(
    value => {
        if (value.data && value.data.message) {
            alert(value.data.message);
        }

        return value;
    },
    error => {
        const {response} = error;

        if (response.data) {
            alert(response.data)
        }

        if (response.status === 401) {
            // @Todo emitir alerta
            history.push('/');
        }
    }
);

export {api}
