import axios from "axios";

const api = axios.create({
    baseURL: 'https://trazpramimback.onrender.com/api'
})

export default api;