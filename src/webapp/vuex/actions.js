<<<<<<< HEAD
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
=======
export const incerment = ({ commit }) => commit('Incerment');
export const decerment = ({ commit }) => commit('Decerment');
>>>>>>> b54893e5196f395f6f6119f2fb33d733d204a5e0
