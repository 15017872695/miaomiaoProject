import Vue from 'vue';
import axios from 'axios';

// 配置基础路径
axios.defaults.baseURL = process.env.VUE_APP_baseURL;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 配置拦截器

    // 请求拦截
        axios.interceptors.request.use(function(config){
            return config;
        },function(error){
            return Promise.reject(error);
        })
    
    // 响应拦截
        axios.interceptors.response.use(function(response){
            return response;
        },function(error){
            return Promise.reject(error);
        })

// 封装axios请求
const hqAxios = {
    get:(url,params)=>{
        return axios.get(url,params);
    },
    post:(url,params)=>{
        return axios.post(url,params);
    },
}

// 添加到Vue原型中
Vue.prototype.$http = hqAxios;

// 导出一个自定义axios对象
export default hqAxios;

