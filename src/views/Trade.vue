<template>
    <div class="container">
        <div class="content">
            <div class="col col-main">
                <div class="col-header">
                    <h1>Trade</h1>
                </div>
                <stock-trade-list></stock-trade-list>
            </div>
            <div class="col col-side">
                <div class="col-header">
                    <stat-bar></stat-bar>
                </div>
                <div class="trade-history">
                    <h3 class="overline section-title">Trade History</h3>
                </div>
            </div>
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
.content {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
}

.col-main {
    flex-grow: 2;
    padding: 0 4em;
}

.col-side {
    flex-grow: 1;
    min-width: 25%;
    background-color: #fff;
    border-top: 2px solid #f4f4f4;
    position: relative;
}
</style>