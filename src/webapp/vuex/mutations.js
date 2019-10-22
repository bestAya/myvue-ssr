export default {
    INCREMENT: (state) => ++state.cont,
    DECREMENT: (state) => --state.cont,
    TOPICS_LIST: (state, topics) => {
        state.topics = topics;
    }
}