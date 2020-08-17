import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const randomValue = (min, max) => {
    return Math.random() * (max - min) + min
}

let companyId = 0;
function Company(name, abbr) {
    this.id = companyId++;
    this.name = name;
    this.abbr = abbr;
    this.price = randomValue(5, 25);
    this._trend = randomValue(-10, 10);
    this._deltaTrend = randomValue(-5, 5);
    this.priceHistory = [];
}

function Stock(company, quantity) {
    this.company = company;
    this.quantity = quantity;
}

function Transaction(company, quantity, price, isSale) {
    this.company = company;
    this.quantity = quantity;
    this.price = price;
    this.isSale = isSale;
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
        transactions: [],
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
            state.transactions.push(new Transaction(stock.company, payload.quantity, stock.company.price, false));
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
            state.transactions.push(new Transaction(stock.company, payload.quantity, stock.company.price, true));
        },
        setPrice(state, payload) {
            const company = payload.company;
            const oldPrice = company.price;
            company.priceHistory.push(oldPrice);
            company.price = payload.price;
        },
        setTrend(state, payload) {
            payload.company._trend = payload.trend;
        }
    },
    actions: {
        endDay: (context) => {
            context.state.companies.forEach(company => {
                //
                // update price using _trend + some variance
                //
                let price = company.price * (1 + (company._trend / 100));
                // add some variance
                const priceVarianceLimit = price * 0.05;
                price += randomValue(-priceVarianceLimit, priceVarianceLimit) + 0.01;
                // commit the changes
                context.commit('setPrice', {company, price})

                //
                // update trend
                //
                let trend = company._trend  + company._deltaTrend;
                // context.commit('setTrend', {company, trend});
                if (trend <= -100) {
                    trend = -99.9;
                }
                company._trend = trend;

                // update deltaTrend. 
                // Greater variance when trend is small. 
                // Skews toward opposite sign of trend.
                let change = randomValue(-1.2, 1.2);
                if (trend < 2 && trend > -2) {
                    change *= 1.5;
                } else {
                    if (trend > 0) {
                        change -= .8;
                    } else {
                        change += .8;
                    }
                }
                company._deltaTrend += change;
            });
        },
    },
    modules: {},
});
