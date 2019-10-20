import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex);

//定义初始化的state

const defaultState = {
    cont: 0,
    topice: [],
}

//判断浏览器环境 抽离CDN
let isBrowser = typeof window != 'undefined';

let state = (isBrowser && window.__INITIAL_STATE__) || defaultState;

//定义mutations
const mutations = {
    INCREMENT: (state) => ++state.cont,
    DECREMENT: (state) => --state.cont,
}

export function createStore() {
    const store = new Vuex.Store({
        actions,
        getters,
        mutations
    })
}
s