import * as TYPES from './types';

// 对于一些接口数据，可能需要在组件内异步得去处理一些事情，这时候就需要写在这里，对应的调用方法是dispatch，需要注意的是：它提交的是mutation，不做数据和状态的更改，这些操作在mutations中处理
const actions = {
    ADD1000(vuex){
        vuex.commit(TYPES.SET_COUMT_ADD,1000);
    },
    REDUCE1000(vuex){
        vuex.commit(TYPES.SET_COUMT_REDUCE,1000);
    }
}
export default actions