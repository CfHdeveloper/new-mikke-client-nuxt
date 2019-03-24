<template>
  <div class="content-title-container">
    <h2 class="content-title">{{contentTitle}}</h2>
  </div>
</template>

<script>
export default {
  props: [
    "contentTitle",
  ]
}
</script>

<style lang="scss" scoped>

  .content-title-container {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;

    .content-title-en {
      font-size: 60px;
      font-weight: 200;
      letter-spacing: 2px;
      color: #2f3542;
      margin-bottom: 10px;

      @media screen and (min-width: 780px){
        font-size: 45px;
      }

      @media screen and (max-width: 779px){
        font-size: 20px;
      }
    }
  }

</style>
