<template>
<div class="pic">
     <el-carousel :interval="4000" type="card" :height="bannerHeight+'px'">
          <el-carousel-item v-for="item in imgUrls" :key="item.id">
            <el-row>
                <el-col :span="24" class="banner_img">
                    <img ref="bannerHeight" :src="item.idView" class="bannerImg" @load="imgLoad"  height="250px"/>
                </el-col>
            </el-row>
          </el-carousel-item>
     </el-carousel>
</div>
</template>
<script>
export default {
    name:"HorseLamp",
    data() {
    return {
        bannerHeight:"",
      imgUrls: [
        {id:0,idView:require('../../../assets/public_images/MD1.png')},
        {id:1,idView:require('../../../assets/public_images/MD2.png')},
        {id:2,idView:require('../../../assets/public_images/MD3.png')},
      ]
    }
  },
  methods:{
      imgLoad(){
          this.$nextTick(()=>{
              this.bannerHeight=this.$refs.bannerHeight[0].height
              console.log(this.$refs.bannerHeight[0].height);
          })
      }
  },
  mounted(){
      this.imgLoad();
      window.addEventListener('resize',()=>{
          this.bannerHeight=this.$refs.bannerHeight[0].height
            this.imgLoad();
          },false)
      },
}
</script>
<style scoped>
.pic{
    margin-left: 55px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>