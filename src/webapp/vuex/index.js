import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

//定义初始化的state

const defaultState = {
    count: 4,
    topice: [],
}

//判断浏览器环境 抽离CDN
let isBrowser = typeof window != 'undefined';

let state = (isBrowser && window.__INITIAL_STATE__) || defaultState;

export function createStore() {
    const store = new Vuex.Store({
        state,
        actions,
        getters,
        mutations
    })
    return store;
}