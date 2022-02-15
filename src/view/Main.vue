<template>
  <el-container>
    <el-aside width=null><Aside></Aside></el-aside>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside.vue'
import Header from'../components/Header.vue'
export default {
    components:{Aside,Header}
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: rgb(84, 92, 100);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>