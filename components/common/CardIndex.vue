<template>
  <div class="frame-container">
    <div class="frame-grid">
      <circle-card v-for="(circle, i) in circles" :key="i" :circle="circle" v-scroll-reveal.reset="{ delay: 150*i }"/>
    </div>
  </div>
</template>

<script>
import CircleCard from '@/components/common/CircleCard'
export default {
  components: {
    CircleCard
  },
  props: [
    "circles"
  ]
}
</script>

<style lang="scss" scoped>

.frame-container {
  padding-bottom: 60px;

  .frame-grid {
    display: grid;
    grid-template-rows: 350px;

    // PC版
    @media screen and (min-width: 960px){
      max-width: 960px;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px; 
    }

    //中間
    @media screen and (max-width: 959px){
      max-width: 760px;
      margin: 0 auto;
      grid-template-rows: 350px;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
    }

    @media screen and (max-width: 410px){
    //スマホ版
      width: 95%;
      margin: 0 auto;
      grid-template-rows: 350px;
      grid-template-columns: 1fr;
    }

  }
}

</style>

