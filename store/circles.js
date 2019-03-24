export const state = () => ({
  circles: []
})


export const getters = {

  //全件取得
  circles: (state)=> state.circles,
  
  //人気順上位5件取得
  popularCircles: (state)=> {

    var popularCircles = state.circles.concat()
    
    popularCircles.sort((a, b)=>{
      if(a.views > b.views) return -1;
      if(a.views < b.views) return 1;
      return 0;
    })

    return popularCircles.slice(0, 3)
  },

  //ランダムに5個取得
  randomCircles: (state)=> {
    
    var circleCount = state.circles.length
    //時々負の数になるエラーの解決
    var ramdomStartNum = Math.floor( Math.random() * circleCount-3 )
    
    
    return state.circles.slice(ramdomStartNum, ramdomStartNum+3)

  },

  //最新取得
  latestCircles: (state)=>state.circles.slice(-3),

  //お気に入りサークルの取得
  myFavouriteCircles: (state) => {
    
    var favouriteCircleNum=[1,2]
    return state.circles.filter((circle)=>favouriteCircleNum.indexOf(circle.id)>=0)

  } 

}


export const mutations = {

  setCircles(state, payload){
    state.circles = payload
  }

}


export const actions = {

  async fetch({ state, commit }, query){

    const {data, error} = await this.$resource().get(`/circles.json`, query)

    if(error) {
      throw new Error()
    }

    console.log(data);

    commit('setCircles', data)

  }

}