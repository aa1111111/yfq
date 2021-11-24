<template>
  <div class="index-box">
    <div class="box1">
      <img src="../../assets/public_images/new5.png" alt="" height="40px" />
      <horses-lamp v-show="this.userType==2"></horses-lamp>
      <horses-lamp-copy v-show="this.userType==1"></horses-lamp-copy>
    </div>
    <div class="box2">
      <img src="../../assets/public_images/new4.png" alt="" height="40px" />
      <el-row>
        <el-col :span="15"><epidemic-map></epidemic-map></el-col>
        <el-col :span="7"><map-text class="text"></map-text></el-col>
      </el-row>
    </div>
    <module-three v-show="this.userType==2"></module-three>
    <notice-an v-show="this.userType==1"></notice-an>
    <resistance-dis></resistance-dis>
  </div>
</template>
<script>
import EpidemicMap from "../../components/EpidemicMap/EpidemicMap.vue";
import MapText from "../../views/index/components/MapText.vue";
import HorsesLampCopy from './components/HorsesLamp copy.vue';
import HorsesLamp from "./components/HorsesLamp.vue";
import ModuleThree from "./components/ModuleThree.vue";
import ResistanceDis from "./components/ResistanceDis.vue";
import noticeAn from "./components/noticeAn.vue";
export default {
  name: "Index",
  components: { EpidemicMap, MapText, HorsesLamp, ResistanceDis, ModuleThree, HorsesLampCopy,noticeAn },
  data() {
    return {
        userType:null,
    };
  },
  mounted() {
    this.userType = this.$route.query.userType;
  },
};
</script>
<style scoped>
.index-box {
  margin: 190px 100px 0 100px;
  /* height: 500px; */
  /* box-shadow: 4px 4px 4px 4px rgb(187, 182, 182,0.3); */
}
.box1 {
  box-shadow: 0 0 8px #c9ecf4;
  background-color: #e6eff1cb;
  background-image: linear-gradient(to top, #eaf1f3cb, white);
}
.box2 {
  box-shadow: 0 0 8px #c9ecf4;
  background-color: #e6eff1cb;
  background-image: linear-gradient(to top, #e6eff1cb, white);
}

img {
  padding-top: 9px;
  margin-left: -8px;
}
</style>