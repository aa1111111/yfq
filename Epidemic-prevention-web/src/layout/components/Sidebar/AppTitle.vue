<template>
    <div class="title-box" ><h1>Welcome</h1>
        <h3>Epidemic Prevention and Control Platform</h3>
        <!-- <img src="../../../assets/public_images/BJ2.png" alt=""> -->
    </div>
</template>
<script>
import Personal from '../../../components/personalMan/personal.vue';
export default {
    components: {  Personal },
}
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
.title-box{
    /* background:url("../../../assets/public_images/BJ2.png") no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment:fixed;
    background-size: 406px 863px;
    background-position: top right; */
    
}
.title-box h1{
    font-weight:500;
    font-size: 30px;
    padding: 20px 0px 0px 30px;

}
.title-box h3{
    color: #84317e;
    padding: 20px 0px 20px 30px;
}
.personal{
    padding-left: 10px;
    padding-top: 10px;
    z-index:999;
}
</style>