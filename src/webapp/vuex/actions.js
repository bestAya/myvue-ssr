import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8081/";

export default {
    incerment: ({ commit }) => commit('INCREMENT'),
    decerment: ({ commit }) => commit('DECREMENT'),
    getTopice: ({ commit, state }) => {
        return axios.get('index/getdata').then(res => {
            if (res.statusText === 'OK') {
                commit('TOPICS_LIST', res.data)
              }
        }).catch((error) => {
            console.log(error)
          })
    }
}