import Axios from 'axios';

 const server = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
   'http://localhost:4444' :  'http://localhost:4444';

export const internalAxios = Axios.create({
    //baseURL: server,
    baseURL: server,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
});