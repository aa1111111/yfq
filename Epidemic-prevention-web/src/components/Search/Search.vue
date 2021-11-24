<template>
  <div>
      <div class="search-item">
    <el-input class="search-inp"
    placeholder="search"
    size="small"
    prefix-icon="el-icon-search"
    v-model="searchQuery.patName">
  </el-input>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data() {
    return {
      searchQuery: {
          patName: "",
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped>
/* 利用穿透，设置input边框隐藏 */
  .search-item>>>.el-input__inner {
    border:solid 2px #8b3680;
    border-radius:20px;
  }
/* .search-item{
    display:inline-block;
    float: right;
    text-align: center;
} */
.search-inp {
    /* position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%); */
    width: 150px;
    /* margin: 10px 10px 0 0; */
   }
</style>