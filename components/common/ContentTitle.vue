<template>
  <div class="content-title-container">
    <h2 class="content-title-en">{{contentTitleEn}}</h2>
    <p class="content-title-jp">{{contentTitleJp}}</p>
  </div>
</template>

<script>
export default {
  props: [
    "contentTitleEn",
    "contentTitleJp"
  ]
}
</script>

<style lang="scss" scoped>

  .content-title-container {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 80px;

    .content-title-en {
      font-size: 60px;
      font-weight: 200;
      letter-spacing: 2px;
      color: #ffa502;
      margin-bottom: 10px;

      @media screen and (min-width: 780px){
        font-size: 60px;
      }

      @media screen and (max-width: 779px){
        font-size: 30px;
      }
    }

    .content-title-jp {
      font-size: 14px;
      letter-spacing: 2px;
      color: #707070;
    }
  }

</style>
