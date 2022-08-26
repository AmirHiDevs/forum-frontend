import Axios from "../axios";


export let channelsListReq = () => {
    return Axios.get(   'channels')
};


