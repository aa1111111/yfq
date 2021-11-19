<template>
<div class="bar">
  <!-- <div class="bar" style="z-index:999"> -->
    <div class="suojin">
      <app-title />
      <el-row>
        <el-col :span="16"><sidebar-item class="bar-item"></sidebar-item></el-col>
        <el-col :span="8"><search class="search"></search></el-col>   
      </el-row>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search/Search.vue';
import AppTitle from "./AppTitle.vue";
import SidebarItem from "./SidebarItem";

// import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, AppTitle, Search },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.bar {
  width: 100%;
  background-color:white;
  padding-left: 100px;
  position: fixed;
  top: 0px;
  
  /* z-index:9999; */
  /* display: flex;
    justify-content: center;
    
    position:fixed;
        top:0;
        left:0;
        width:80%;
        height:100%; */
}
.suojin {
  
}
.search{
float: left;
padding-top: 21px;
}
.bar-item{
float: left;
padding-top: 5px;
}
</style>
