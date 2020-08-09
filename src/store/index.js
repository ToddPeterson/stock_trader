import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let companyId = 0
function Company(name) {
  this.id = companyId++;
  this.name = name;
  this.price = 10.11;
  this.previous = 10.00;
}

export default new Vuex.Store({
  state: {
    companies: [
      new Company('Snapple'),
      new Company('MyFace'),
      new Company('HuFlix'),
      new Company('Goomble'),
      new Company('Testa'),
      new Company('EnGone'),
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
