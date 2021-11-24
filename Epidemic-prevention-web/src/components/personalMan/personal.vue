<template>
  <div>
      <div class="search-item">
    <!-- <el-input class="search-inp"
    placeholder="search"
    size="small"
    prefix-icon="el-icon-search"
    v-model="searchQuery.patName">
  </el-input> -->
      <el-avatar src=https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png></el-avatar>
    
  </div>
  </div>
</template>

<script>

export default {
  name: 'personal',
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
  .search-item{
  }
</style>