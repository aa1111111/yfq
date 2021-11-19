<template>
    <div class="box">
        <dc-list></dc-list>
    </div>
</template>
<script>
import DcList from './components/DcList.vue'
export default {
  components: { DcList },
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