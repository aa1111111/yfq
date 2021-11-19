<template>
    <div class="box">
        <return-apply-list></return-apply-list>
    </div>
</template>
<script>
import returnApplyList from './components/returnApplyList.vue'
export default {
  components: { returnApplyList },
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