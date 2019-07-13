import * as TYPES from './types';

// mutations 处理数据，操作状态，获取数据都在这，同步去处理数据对应的调用方法 commit
const mutations = {
    [TYPES.SET_COUMT](state,v){
        state.count = v;
    },
    [TYPES.SET_COUMT_ADD](state,v){
        if(v){
            state.count += v
        }else{
            state.count ++
        }
    },
    [TYPES.SET_COUMT_REDUCE](state,v){
        if(v){
            state.count -= v
        }else{
            state.count --
        }
    }
}
export default mutations