import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const random_value = (min, max) => {
    return Math.random() * (max - min) + min
}

let companyId = 0;
function Company(name, abbr) {
    this.id = companyId++;
    this.name = name;
    this.abbr = abbr
    this.price = random_value(5, 25);
    this.priceHistory = [];
}

function Stock(company, quantity) {
    this.company = company;
    this.quantity = quantity;
}

export default new Vuex.Store({
    state: {
        companies: [
            new Company('Snapple', 'SNP'),
            new Company('MyFace', 'MFA'),
            new Company('HuFlix', 'HFX'),
            new Company('Goomble', 'GMB'),
            new Company('Testa', 'TST'),
            new Company('EnGone', 'EGN'),
        ],
        balance: 1000.0,
        stocks: [],
    },
    getters: {
        totalInvestment(state) {
            let total = 0.0;
            state.stocks.forEach(stock => {
                total += (stock.company.price * stock.quantity);
            })
            return total;
        }
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
        sell(state, payload) {
            const stock = state.stocks.find(
                (stock) => stock.company.id === payload.company.id
            );

            if (payload.quantity > stock.quantity) {
                alert('Insufficient shares.');
                return;
            }

            const price = stock.company.price * payload.quantity;
            stock.quantity -= payload.quantity;
            state.balance += price;
        },
        updatePrice(state, payload) {
            const company = payload.company;
            const oldPrice = company.price;
            company.priceHistory.push(oldPrice);
            company.price = payload.price;
        },
    },
    actions: {
        endDay: (context) => {
            context.state.companies.forEach(company => {
                const delta = random_value(-5, 5);
                const price = company.price + delta;
                context.commit('updatePrice', {company, price})
            });
        }
    },
    modules: {},
});
