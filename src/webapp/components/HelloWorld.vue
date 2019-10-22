<template>
  <div class="hello">
    <h1>{{ cont }}</h1>
    <button
      class="btn"
      @click="incerment"
    >加1 [+]</button>
    <button
      class="btn"
      @click="decerment"
    >减1 [-]</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const apiGetTopice = ({ store }) => {
  return store.dispatch("getTopics");
};
export default {
  asyncData: apiGetTopice,
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({ cont: "getCount" })
  },
  methods: {
    ...mapActions(["incerment", "decerment"])
  },
  mounted() {
    apiGetTopice({ store });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
