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

function Stock(company, quantity) {
  this.company = company;
  this.quantity = quantity;
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
    ],
    balance: 1000,
    stocks: []
  },
  mutations: {
    buy(state, payload) {
      const stockIdx = state.stocks.findIndex(stock => stock.company.id === payload.company.id);
      if (stockIdx < 0) {
        const stock = new Stock(payload.company, payload.quantity);
        state.stocks.push(stock);
      } else {
        state.stocks[stockIdx].quantity += payload.quantity;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
