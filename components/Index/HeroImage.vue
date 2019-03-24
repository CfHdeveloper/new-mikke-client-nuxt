<template>
  <div class="hero-image">
    <img src="@/assets/img/hero-image.jpg" alt="" class="img">
    <div class="title-container">
      <p class="subscription">「自分にぴったりのサークル」を見つけるためのサービス</p>
      <img src="@/assets/img/mikke-logo-white.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

.hero-image {
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%) blur(5px);
  }

  .title-container {

    text-align: center;
    color: #ffffff;
    position: absolute;
    opacity: 0;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    animation: fadeIn 1s;
    animation-delay: .3s;
    animation-fill-mode: forwards;

    .subscription {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 700;
    }
  }


}
</style>
