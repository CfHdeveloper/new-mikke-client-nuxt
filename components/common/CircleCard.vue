<template>
  <div class="card">
    <img :src="circle.url" class="img"/>
    <div class="info">
      <p class="tag" v-for="(genre, index) in circle.genres" :key="index">{{genre.name}}</p>
      <h2 class="title">{{circle.name}}</h2>
      <p class="location">{{getLocation}}</p>
    </div>
    <!-- マスク　スマホ版では出さない -->
    <div class="mask">
      <div class="caption">
        <p class="show-more">くわしくチェック！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "circle"
  ],
  computed: {
    getLocation(){
      switch(this.circle.location){
        case 0:
          return "豊中キャンパス";
          break;
        case 1:
          return "吹田キャンパス";
          break;
        case 2:
          return "箕面キャンパス";
          break;
        case 3:
          return "その他";
          break;
        default:
          return "-";
          break;
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>

  .card {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow:		hidden;
    @media screen and (min-width: 780px){
      width: 300px;
      cursor: pointer;
      
    }
    .v-lazy-image {
      opacity: 0;
      transition: 0.2s;
    }
    .v-lazy-image-loaded {
      opacity: 1;
    }
    .img {
      width: 100%;
      height: 60%;
      object-fit: cover;
      vertical-align: bottom;
      transition: opacity 2s ease;
      /* 読み込み中は透明に */
      [lazy=loading] {
        opacity: 0;
      }
      /* 読み込み完了で徐々に不透明になっていく */
      [lazy=loaded] {
        opacity: 1;
      }
    }
    .mask {
      	width:			100%;
        height:			100%;
        position:		absolute;
        top:			0;
        left:			0;
        opacity:		0;	/* マスクを表示しない */
        background-image: linear-gradient(45deg, #f6d365 0%, #ffa502 100%);
        -webkit-transition:	all 0.6s ease;
        transition:		all 0.6s ease;
        display: flex;
        align-items: center;
        .caption {
          font-size:		130%;
          color:			#ffffff;
          padding-left:		0px;
          .show-more {
            font-size: 14px;
            font-weight: 500;
            border: 2px solid #ffffff;
            padding: 10px;
          }
        }
        @media screen and (max-width: 780px){
          display: none;
        }
    }
    &:hover .mask {
      opacity: .95;	/* マスクを表示する */
      padding-left:		78px;	/* 右にずらす */
    }
  }
  .info {
    width: 100%;
    height: 40%;
    text-align: left;
    background-color: #ffffff;
    padding: 20px;
  }
  .title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .tag {
    font-size: 12px;
    font-weight: 500;
    color: #f39800;
    margin-bottom: 12px;
  }
  .location {
    color: #808080;
    font-size: 12px;
  }

</style>

