<template>
  <div>
    <hero-image class="only-pc"/>
    <navigation-bar/>
    <search-form class="bg-orange"/>
    <content-title contentTitleEn="POPULAR" contentTitleJp="人気サークル" class="bg-gray2"/>
    <card-index :circles="popularCircles" class="bg-gray2"/>
    <content-title contentTitleEn="RECOMMEND" contentTitleJp="注目のサークル" class="bg-gray"/>
    <card-index :circles="randomCircles" class="bg-gray"/>
    <content-title contentTitleEn="LATEST" contentTitleJp="最近登録されたサークル" class="bg-gray2"/>
    <card-index :circles="latestCircles" class="bg-gray2"/>


  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import HeroImage from '@/components/index/HeroImage'
import NavigationBar from '@/components/common/NavigationBar'
import ContentTitle from '@/components/common/ContentTitle'
import CardIndex from '@/components/common/CardIndex'
import SearchForm from '@/components/index/SearchForm'

export default {
  layout: 'default',

  components: {
    HeroImage,
    ContentTitle,
    CardIndex,
    SearchForm,
    NavigationBar
  },

  async mounted(){
    await this.$store.dispatch('circles/fetch', {});
  },

  computed: {
    ...mapGetters('circles', ['circles', 'latestCircles', 'randomCircles', 'popularCircles', 'myFavouriteCircles'])
  },
}

</script>
