const axios = require('axios')

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.axios = axios()
    
  }

  getFullList () {
    this.axios.get(this.BASE_URL)
      .then(
        renderFetchAll(response)
      )
      .catch()
  }

  getOneRegister (id) {
    this.axios.get(`${this.BASE_URL}/${id}`)
      .then(
        renderFetchOne(response)
      )
      .catch()
  }

  createOneRegister () {
    this.axios.post(this.BASE_URL)
      .then(
        renderNewCharacterForm(response)
      )
      .catch()
  }

  updateOneRegister (id) {
    this.axios.put(`${this.BASE_URL}/${id}`)
      .then(
        renderEditCharacterForm()
      )
      .catch()
  }

  deleteOneRegister () {
    this.axios.delete(`${this.BASE_URL}/${id}`)
      .then(
        renderDeleteOne()
      )
      .catch()
  }
}
