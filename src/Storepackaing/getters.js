//getters 可在这将mutations处理过的数据再进行处理后返回出去或者直接调用getters将新值返回出去
const getters = {
    docount:(state,getters) =>{
        return state.counts
    }
}
export default getters