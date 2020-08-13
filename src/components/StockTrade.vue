<template>
    <div class="container">
        <div class="content">
            <h2 class="company">{{ company.name }}</h2>
            <div class="price-container">
                <span class="price overline">${{ company.price.toFixed(2) }}</span>
            </div>
            <div class="trend-container">
                <div class="trend">
                    <div class="top-line">
                        <div class="trend-symbol" :class="trendSymbol(oneDayTrend)"></div>
                        <div class="trend-percent">{{ oneDayTrend.toFixed(2) }}%</div>
                    </div>
                    <div class="trend-title">
                        <p>One Day</p>
                    </div>
                </div>
                <div class="trend">
                    <div class="top-line">
                        <div class="trend-symbol" :class="trendSymbol(sevenDayTrend)"></div>
                        <span class="trend-percent">{{ sevenDayTrend.toFixed(2) }}%</span>
                    </div>
                    <div class="trend-title">
                        <p>Seven Day</p>
                    </div>
                </div>
            </div>
            <app-toggle v-model="buySelected"></app-toggle>
            <button @click="submitTransaction" class="btn submit-btn">Submit</button>
        </div>
    </div>
</template>

<script>
import Toggle from './Toggle.vue';

export default {
    props: ['company'],
    data() {
        return {
            buySelected: true
        }
    },
    computed: {
        oneDayTrend() {
            const current = this.company.price;
            const previous = this.company.priceHistory[ this.company.priceHistory.length - 1];
            let value = (current - previous) / previous;
            value *= 100;
            return value;
        },
        sevenDayTrend() {
            const current = this.company.price;
            const previous = this.company.priceHistory[ this.company.priceHistory.length - 7];
            let value = (current - previous) / previous;
            value *= 100;
            return value;
        },
    },
    methods: {
        submitTransaction() {
            if (this.buySelected) {
                this.buy();
            } else {
                this.sell();
            }
        },
        buy() {
            this.$store.commit('buy', {company: this.company, quantity: 1})
        },
        sell() {
            this.$store.commit('sell', {company: this.company, quantity: 1})
        },
        trendSymbol(trend) {
            return {
                up: (trend > 0),
                down: (trend < 0),
                even: (trend === 0)
            }
        }
    },
    components: {
        appToggle: Toggle
    }
}
</script>

<style scoped>
.container {
    background-color: #fff;
    padding: 1rem;
    width: 32%;
    margin-bottom: 2%;
}

.trend-container {
    display: flex;
    justify-content: space-evenly;
    background-color: #333;
    color: #fff;
    padding: 0.6rem;
    margin-bottom: 1rem;
}

.trend-title {
    color: #e5c48e;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
}

.trend .top-line div {
    display: inline-block;
}

.price {
    display: inline-block;
    font-size: 44px;
    font-weight: 300;
    margin-top: 1.2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.trend-symbol {
    margin-right: 0.5rem;
    margin-bottom: 2px;
}

.trend-symbol.up {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid green;
}

.trend-symbol.down {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid red;
}

.trend-symbol.even {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: grey;
}

.trend-percent {
    font-weight: 300;
}

.submit-btn {
    margin-top: 1em;
}
</style>