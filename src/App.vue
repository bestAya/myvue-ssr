<template>
  <div id="app">
      {{msg}}
      <img src="./assets/img/2.jpg" alt=""/>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        msg:'aa'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style  scoped>
@import url('./assets/css/index.css');
#app{
    display: flex;
}
</style>