import axios from 'axios';

class Resource
{
  constructor(axios, responseBuilder, ctx)
  {
    this._axios = axios;
    this._responseBuilder = responseBuilder
    this._ctx = ctx;
  }

  async get(url, params = {}, type = 'json')
  {
    return await this.request('get', url, null, params, type)
  }
  async post(url, data, type = 'json')
  {
    return await this.request('post', url, data, null, type)
  }
  async put(url, data)
  {
    return await this.request('put', url, data)
  }
  async delete(url, data)
  {
    return await this.request('delete', url, data)
  }

  async request(method, url, data, params = {}, type = 'json')
  {
    const response = await this._axios({
      headers: {
        //現状とりあえず空（必要に応じて追加）
      },
      method : method,
      url    : url,
      data   : data,
      params : params,
      responseType: type
    })
    .catch((err) => err.response)

    return this._responseBuilder(response);
  }
}

class Response
{
  constructor(response)
  {
    this._rawResponse  = response;
    this._expectStatus = 200;
    this._buildResponse();
    return this;
  }

  _buildResponse() {
    const { status, headers, data } = this._rawResponse || {}; //network_errorとかの場合responseはundefinedになる
    this.status  = status;
    this.headers = headers;
    this.data    = data;
  }

  get error() {
    return this.status !== this._expectStatus;
  }
}


export default (ctx, inject) => {
  inject('resource', () => {

    const client = axios.create({
      baseURL: 'http://tk2-215-17314.vs.sakura.ne.jp:3000',
    })
    return new Resource(client, (res) => new Response(res), ctx);

  });
};
