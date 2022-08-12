import Axios from "../axios";
import axios from "axios";


export let RegisterReq = (formData) => {
    return Axios.post('auth/register', formData)
};

export let LoginReq = (formData) => {
    if (!CheckAuth()) {
        axios.get('http://localhost/api/csrf-cookie').then(res => {
            return Axios.post('auth/login', formData)
        })
    }

};

export let CheckAuth = () => {
    let isAuth = false;
    Axios.get('auth/user/info').then(res => isAuth = res.data.email !== null)
    return isAuth;
};





