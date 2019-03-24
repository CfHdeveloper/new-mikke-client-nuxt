export const state = () => ({
  genres: []
})


export const getters = {

  //全件取得
  

}


export const mutations = {

  setGenres(state, payload){
    state.genres = payload
  }


}


export const actions = {

  async fetch({ state, commit }, query){

    const {data, error} = await this.$resource().get(`/genres.json`, query)

    if(error) {
      throw new Error()
    }

    commit('setGeneres', data)

  }

}