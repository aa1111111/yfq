<template>
  <div class="bar">
    <!-- <div class="bar" style="z-index:999"> -->
    <div class="suojin">
      <app-title />

      <el-row>
        <el-col :span="15"
          ><sidebar-item class="bar-item"></sidebar-item
        ></el-col>
        <el-col :span="4"><search class="search"></search></el-col>
        <el-col :span="2"
          ><div @click="personal"><personal class="personal"></personal
        ></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search/Search.vue";
import AppTitle from "./AppTitle.vue";
import SidebarItem from "./SidebarItem";
import Personal from "../../../components/personalMan/personal.vue";

// import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, AppTitle, Search, Personal },
  data() {
    return {
      userType:null,
    };
  },
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
  mounted() {
    this.userType = this.$route.query.userType
  },
  methods: {
    personal() {
      this.$router.push({ path: "personalIndex", query: { userType: this.userType } });
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
  background-color: white;
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
.search {
  float: left;
  padding-top: 21px;
}
.personal {
  padding-top: 18px;
  position: relative;
  z-index: 99;
}
.bar-item {
  float: left;
  padding-top: 5px;
}
</style>
