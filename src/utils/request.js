import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3000',
    timenout: 5000,
    responseType: "json",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
})


//请求拦截
http.interceptors.request.use(config => {
    if (config.method === "post") {
        // config.data = qs.stringify(config.data);
    }
    if (config.method === "get") {
        config.params = {
            ...config.params,
            t: Date.parse(new Date()) / 1000
        };
    }
    // 查看本地是否有token
    if (localStorage.token) {
        config.headers.Authorization = localStorage.token;
    }
    return config;
},
    error => {
        return Promise.reject(error);
    })


//响应拦截
http.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default (method, url, data = null) => {
    if (method === "post") {
        return http.post(url, data);
    } else if (method === "get") {
        return http.get(url, { params: data });
    } else {
        return;
    }
};