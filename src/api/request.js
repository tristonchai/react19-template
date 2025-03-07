import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.DEV ? "" : import.meta.env.VITE_API_URL, // empty string if development environment, else will using variable from .env
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
})

// Add a request interceptor
service.interceptors.request.use((config) => {
    // Do something before request is sent
    // const token = localStorage.getItem("token");
    // if(token){
    //     ...
    // }
    return config
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
service.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, (error) => {
    return Promise.reject(error)
})

export default service;