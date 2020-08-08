<template>
    <div class="container">
        <div class="content">
            <h1>The Stock Page</h1>
            <stock-trade-list></stock-trade-list>
        </div>
    </div>
</template>

<script>
import StockTradeList from '../components/StockTradeList.vue'

export default {
    components: {
        StockTradeList
    }
}
</script>

<style scoped>
.content {
    width: 70%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 4em 0;
}
</style>