import Axios, {baseUrl} from "../axios";
import axios from "axios";


export let registerReq = (formData) => {
    return Axios.post('auth/register', formData)
};

export let loginReq = async (formData) => {
    if (!await checkAuth()) {
        let req
        await axios.get(`${baseUrl}csrf-cookie`).then(res => {
            req = Axios.post('auth/login', formData)
        }).catch(err => console.log(err))

        return req
    }
};


export let logoutReq = () => {
        return Axios.post('auth/logout')

}


export let checkAuth = async () => {
    let isAuth = false;

    await Axios.get('auth/user/info')
        .then(res => isAuth = true)
        .catch(err => isAuth = false)


    localStorage.setItem('isAuth', isAuth ? 'true' : 'false')

    return isAuth;
};

export let getUserInfo = async () => {
    if (await checkAuth()) {
        return Axios.get('auth/user/info')
    }
}



