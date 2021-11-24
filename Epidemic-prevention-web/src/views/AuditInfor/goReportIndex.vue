<template>
    <div class="box">
        <go-report-list></go-report-list>
    </div>
</template>
<script>
import goReportList from './components/goReportList.vue'
export default {
  components: { goReportList },
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