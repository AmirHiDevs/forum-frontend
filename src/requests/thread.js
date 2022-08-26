import Axios from "../axios";


export let threadsListReq = (page) => {
    return Axios.get(   `threads?page=${page}`)
};

export let createThreadReq = (formData) => {
    return Axios.post(   'threads',formData)
};

