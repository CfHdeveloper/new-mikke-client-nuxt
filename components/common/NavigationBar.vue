<template>
  <div id="navigation">
    <div class="content-container">
      <div class="logo only-pc">
        <img src="@/assets/img/mikke-logo-white.svg" alt="">
      </div>
      <div class="menu-container">
        <div class="menu">
          <font-awesome-icon :icon="['fas', 'search']" class="icon only-smart-phone"/> 
          <p>HOME</p>
        </div>
        <div class="menu">
          <font-awesome-icon :icon="['fas', 'search']" class="icon only-smart-phone"/> 
          <p>SEARCH</p>
        </div>
        <div class="menu">
          <font-awesome-icon :icon="['fas', 'search']" class="icon only-smart-phone"/> 
          <p>LIKE</p>
        </div>
        <div class="menu only-smart-phone">
          <font-awesome-icon :icon="['fas', 'search']" class="icon only-smart-phone"/> 
          <p>OTHER</p>
        </div>
      </div>
      <div class="contact-form only-pc">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
        <p class="comment">CONTACT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#navigation {
  background-color: #2f3542;
  z-index: 10;
  height: 80px;


  // PC版
  @media screen and (min-width: 780px){
    width: 100%;
    position: sticky;
    top: 0;
  }

  // スマホ版
  @media screen and (max-width: 779px){
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .content-container {
    // PC版
    @media screen and (min-width: 780px){
      max-width: 960px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    // スマホ版
    @media screen and (max-width: 779px){
      height: 80px;
    }

    .menu-container {
      height: 80px;
      display: flex;

      // PC版
      @media screen and (min-width: 780px){
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      // スマホ版
      @media screen and (max-width: 779px){
        justify-content: space-between;
      }

      
      .menu {
        color: #ffffff;

        @media screen and (min-width: 780px){        
          padding-right: 20px;
          padding-left: 20px;
          margin: 0 10px;
          font-size: 18px;
          font-weight: 500;
          line-height: 80px;
          cursor: pointer;
          transition: .2s;

          &:hover {
            border-bottom: 5px solid #ffa502;
          }
        }


        @media screen and (max-width: 779px){
          width: 25vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 500;
        }

        .icon {
          font-size: 25px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .logo {
    width: 200px;
  }

  .contact-form {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffa502;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    transition: .3s;
    cursor: pointer;

    @media screen and(min-width: 780px){
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .comment {
      margin-left: 10px;
      transition: .5s;
      display: none;
    }

    &:hover {
      width: 150px;
      .comment {
        display: inline-block;
      }

    }
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%
  }
}

</style>

