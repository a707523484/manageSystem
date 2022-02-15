<template>
  <header>
    <div class="left-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu()"></el-button>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdownM-link">
          <img :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="exit()">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      userImg: require("../assets/user.jpg"),
    };
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    exit(){
      this.$router.push("/login");
      this.$store.state.tab.isShow=false;
    }
  }
};
</script>
<style>
header {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: center;
}

.el-button {
  margin-right: 20px;
}


.right-content img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>