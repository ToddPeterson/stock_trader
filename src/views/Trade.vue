<template>
    <div class="container">
        <div class="content">
            <stock-trade-list></stock-trade-list>
        </div>
    </div>
</template>

<script>
import StockTradeList from '../components/StockTradeList.vue'
import StatBar from '../components/StatBar.vue'

export default {
    components: {
        StockTradeList,
        StatBar
    }
}
</script>

<style scoped>
</style>