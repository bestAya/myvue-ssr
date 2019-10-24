<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <div
      v-for="(item,index) in topice"
      :key="index"
    >
      {{item.title}}
    </div>
    <button
      class="btn"
      @click="incerment"
    >加1 [+]</button>
    <button
      class="btn"
      @click="decerment"
    >减1 [-]</button>
    <p>
      {{data}}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const apiGetTopice = ({ store, route }) => {
  console.log(store, route);
  return store.dispatch("getTopice");
};
export default {
  asyncData: apiGetTopice,
  name: "HelloWorld",
  data() {
    return {
      data: "zfsafa"
    };
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
      topice: 'getTopice',
    })
  },
  methods: {
    ...mapActions(["incerment", "decerment"])
  },
  mounted() {
    apiGetTopice({ store: this.$store,route:this.$route });
  },
  created() {
    console.log(this.$store.state.count)
  },
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
