<template>
  <div class="pic">
    <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'" >
      <el-carousel-item v-for="item in imgUrls" :key="item.id">
        <el-row>
          <el-col :span="24" class="banner_img">
            <img
              ref="bannerHeight"
              :src="item.idView"
              class="bannerImg"
              @load="imgLoad"
              @click="update(item.num)"
              height="250px"
            />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "HorseLamp",
  data() {
    return {
      userType: null,
      bannerHeight: "",
      imgUrls: [
        {
          id: 0,
          num: "go",
          idView: require("../../../assets/public_images/MD11.png"),
        },
        {
          id: 1,
          num: "his",
          idView: require("../../../assets/public_images/MD12.png"),
        },
        {
          id: 2,
          num: "rep",
          idView: require("../../../assets/public_images/MD13.png"),
        },
      ],
    };
  },
  mounted() {
    this.userType = this.$route.query.userType;
  },
  methods: {
    update(methodsNums){
      //触发这个参数的方法
      this[methodsNums]()
    },
    go() {
      this.$router.push({
        path: "gooutIndex",
        query: { userType: this.userType },
      });
    },

    his() {
      this.$router.push({
        path: "userDailyIndex",
        query: { userType: this.userType },
      });
    },
    rep() {
      this.$router.push({
        path: "gooutIndex",
        query: { userType: this.userType },
      });
    },
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        console.log(this.$refs.bannerHeight[0].height);
      });
    },
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.imgLoad();
      },
      false
    );
  },
};
</script>
<style scoped>
.pic {
  margin-left: 55px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>