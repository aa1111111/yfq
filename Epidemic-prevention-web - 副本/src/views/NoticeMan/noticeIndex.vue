<template>
    <div class="box">
        <notice-list></notice-list>
    </div>
</template>
<script>
import noticeList from './components/noticeList.vue'
export default {
  components: { noticeList },
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