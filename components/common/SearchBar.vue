<template>
  <div class="search-bar-container">
    <input type="text" class="input" placeholder="キーワードからサークルを検索">
    <button class="submit-btn">
      <font-awesome-icon :icon="['fas', 'search']"/> 
    </button>
  </div>
</template>

<script>
export default {

  methods: {
    submit(){

    }
  }
  
}
</script>

<style lang="scss" scoped>

.search-bar-container {

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 780px){
    transform: translateX(32px);
  }
  
  @media screen and (max-width: 779px){
    transform: translateX(22px);
  }


  .submit-btn {
    border-radius: 50%;
    background-color: #ffa502;
    color: #ffffff;
    border: none;
    flex-shrink: 0;

    cursor: pointer;

    @media screen and (min-width: 780px){
      width: 50px;
      height: 50px;
      font-size: 20px;
      transform: translateX(-65px);
    }
    
    @media screen and (max-width: 779px){
      width: 30px;
      height: 30px;
      transform: translateX(-45px);
    }
  }

  .input {
    width: 100%;
    line-height: 30px;
    border: none;

    @media screen and (min-width: 780px){
      font-size: 20px;
      padding: 15px;
    }
    
    @media screen and (max-width: 779px){
      font-size: 14px;
      padding: 7px;
    }
  }
}


</style>
