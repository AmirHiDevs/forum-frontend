import axios from "axios";


const Axios = axios.create({
    baseURL: 'http://localhost/api/v1'
});


Axios.defaults.withCredentials = true;

export default Axios;
