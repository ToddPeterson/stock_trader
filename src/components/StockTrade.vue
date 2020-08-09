<template>
    <div class="container">
        <div class="content">
            <h2 class="company">{{ company.name }}</h2>
            <div class="stat-container">
                <span class="price overline">${{ company.price }}</span>
                <div class="trend-symbol" :class="trendSymbol"></div>
                <span class="trend-percent">{{ percentageTrend }}%</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['company'],
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
            return value.toFixed(2);
        }
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

.stat-container span,
.stat-container div {
    display: inline-block;
}

.price {
    font-size: 44px;
    font-weight: 300;
    margin-top: 1.2rem;
    margin-right: 1rem;
}

.trend-symbol {
    margin-right: .5rem;
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