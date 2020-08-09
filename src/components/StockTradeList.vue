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
import { mapState } from 'vuex';
import StockTrade from './StockTrade.vue';

export default {
    computed: mapState(['companies']),
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