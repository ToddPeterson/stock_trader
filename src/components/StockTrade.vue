<template>
    <div class="container">
        <div class="content">
            <h2 class="company">{{ company.name }}</h2>
            <div class="price-container">
                <span class="price overline">${{ company.price }}</span>
            </div>
            <div class="trend-container">
                <div class="trend">
                    <div class="top-line">
                        <div class="trend-symbol" :class="trendSymbol"></div>
                        <div class="trend-percent">{{ percentageTrend.toFixed(2) }}%</div>
                    </div>
                    <div class="trend-title">
                        <p>One Day</p>
                    </div>
                </div>
                <div class="trend">
                    <div class="top-line">
                        <div class="trend-symbol" :class="trendSymbol"></div>
                        <span class="trend-percent">{{ percentageTrend.toFixed(2) }}%</span>
                    </div>
                    <div class="trend-title">
                        <p>Seven Day</p>
                    </div>
                </div>
            </div>
            <app-toggle v-model="buySelected"></app-toggle>
            <button @click="buy" class="btn">Buy</button>
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
        trendSymbol() {
            return {
                up: (this.company.price > this.company.previous),
                down: (this.company.price < this.company.previous),
                even: (this.company.price === this.company.previous)
            }
        },
        percentageTrend() {
            let value = (this.company.price - this.company.previous) / this.company.previous;
            value *= 100;
            return value;
        }
    },
    methods: {
        buy() {
            this.$store.commit('buy', {company: this.company, quantity: 1})
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
</style>