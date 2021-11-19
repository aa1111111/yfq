<template>
    <div class="box">
        <his-jou-list></his-jou-list>
    </div>
</template>
<script>
import hisJouList from './components/hisJouList.vue'
export default {
  components: { hisJouList },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.box{
  padding: 200px 100px 0 100px;
/* color: #d6aac58c; */
}
</style>