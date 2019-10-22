import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< HEAD
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
=======
import * as actions from './actions'
import * as getters from './getters'
>>>>>>> b54893e5196f395f6f6119f2fb33d733d204a5e0
Vue.use(Vuex);

//定义初始化的state

const defaultState = {
    cont: 0,
    topice: [],
}

//判断浏览器环境 抽离CDN
let isBrowser = typeof window != 'undefined';

let state = (isBrowser && window.__INITIAL_STATE__) || defaultState;

<<<<<<< HEAD

=======
//定义mutations
const mutations = {
    INCREMENT: (state) => ++state.cont,
    DECREMENT: (state) => --state.cont,
}
>>>>>>> b54893e5196f395f6f6119f2fb33d733d204a5e0

export function createStore() {
    const store = new Vuex.Store({
        actions,
        getters,
        mutations
    })
}
s