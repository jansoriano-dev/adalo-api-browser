import axios from 'axios';

export const API = axios.create({
    baseURL: `https://api.adalo.com/apps/b0936c58-c85f-4f9e-a24f-18c4670023f0/collections/t_5fapnotjz5fg2rovd9mms69kq`,
    headers: {
        authorization: `Bearer 1giji4lmnxjinma6cs492a4nt`
    }
})

export default API