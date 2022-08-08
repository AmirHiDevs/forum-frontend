import Axios from "../axios";


export let RegisterReq = (formData) => {
    return Axios.post(   'auth/register' , formData)
};


