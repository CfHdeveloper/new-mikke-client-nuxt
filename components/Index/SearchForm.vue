<template>
  <div class="search-form">
    <search-bar　class="search-bar"/>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar'
export default {
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  padding-top: 60px;
  padding-bottom: 60px;
  
  display: flex;
  justify-content: center;

  .search-bar {
    max-width: 960px;
    margin: 0 auto;
  }
}

</style>
