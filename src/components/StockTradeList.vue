<template>
    <div class="container">
        <div class="content">
            <h3 class="overline section-title">Stocks</h3>
            <div class="list-container">
                <stock-trade v-for="company in companies" :key="company.id" :company="company"></stock-trade>
            </div>
        </div>
    </div>
</template>

<script>
import StockTrade from './StockTrade.vue'

export default {
    data() {
        return {
            companies: [
                {name: 'Snapple', id: 'asdf', price: 12.34, previous: 12.08},
                {name: 'Netflix', id: 'qwer', price: 9.87, previous: 10.12},
                {name: 'MyFace', id: 'zxcv', price: 10.11, previous: 10.11},
            ]
        }
    },
    components: {
        StockTrade
    }
}
</script>

<style scoped>
.list-container {
    margin-top: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
}
</style>