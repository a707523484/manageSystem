<template>
  <div id="app">
   <div>
     <Main v-if="isShow"></Main>
     <router-view name='router_login'></router-view> 
   </div>
  </div>
</template>

<script>
import Main from './view/Main.vue'
export default {
  name: "App",
  components: {Main},
  data(){
    return{
      // isShow:true
    }
  },
  computed:{
    isShow(){
      return this.$store.state.tab.isShow;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
