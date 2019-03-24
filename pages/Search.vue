<template>
  <div>
    <navigation-bar/>
    <content-title contentTitleEn="SEARCH" contentTitleJp="サークル検索" class="bg-gray"/>
    <search-form class="bg-gray"/>
  </div>
</template>

<script>
import ContentTitle from '@/components/common/ContentTitle'
import CardIndex from '@/components/common/CardIndex'
import SearchForm from '@/components/index/SearchForm'
import NavigationBar from '@/components/common/NavigationBar'

export default {
  components: {
    ContentTitle,
    CardIndex,
    SearchForm,
    NavigationBar
  }
}
</script>

