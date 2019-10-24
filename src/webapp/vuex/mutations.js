export default {
    INCREMENT: (state) => ++state.count,
    DECREMENT: (state) => --state.count,
    TOPICS_LIST: (state, topice) => {
        state.topice = topice;
    }
}