import Axios from "axios";

/*const {REACT_APP_URL_API} = process.env;

console.log(REACT_APP_URL_API);*/

const api = Axios.create({
    baseURL: "http://localhost:4000/api",
});

export {api}
