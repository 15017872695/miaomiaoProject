import systemAPI from './systemAPI';
import Vue from 'vue';

// 使用ES6解构
var apis = {
    ...systemAPI,
}

// 将解构的对象 添加到Vue原型中，这样任何页面只要Vue实例存在 则可以直接调用解构中的内容
Vue.prototype.$apis = apis;

// 导出（将文件暴露出去）
export default apis;