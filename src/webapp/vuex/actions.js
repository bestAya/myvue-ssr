import axios from 'axios';
axios.defaults.baseURL = "http://loaclhost:8081";

export default {
    incerment : ({ commit }) => commit('Incerment'),
    decerment : ({ commit }) => commit('Decerment'),
    getTopics : ({commit , state}) => {
        return axios.get('index/getdata').then(res=>{
            commit('TOPICS_LIST',res.data)
        })
    }
}