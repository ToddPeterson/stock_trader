import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let companyId = 0;
function Company(name) {
    this.id = companyId++;
    this.name = name;
    this.price = 10.11;
    this.previous = 10.0;
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
        balance: 1000.00,
        stocks: [],
    },
    mutations: {
        init(state) {
            state.companies.forEach((company) => {
                state.stocks.push(new Stock(company, 0));
            });
        },
        buy(state, payload) {
            const stock = state.stocks.find(
                (stock) => stock.company.id === payload.company.id
            );
            const price = stock.company.price * payload.quantity;
            if (price > state.balance) {
              alert('Insufficient funds.');
              return;
            }
            state.balance -= price;
            stock.quantity += payload.quantity;
        },
    },
    actions: {},
    modules: {},
});
