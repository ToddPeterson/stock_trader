<template>
    <div class="container">
        <div class="content">
            <div class="col col-main">
                <div class="col-header">
                    <h1>Overview</h1>
                </div>
                <div class="portfolio-container">
                    <h3 class="overline section-title">Portfolio</h3>
                    <div class="table-wrap">
                        <table class="portfolio-list">
                            <tr>
                                <th>Company</th>
                                <th>Price</th>
                                <th>Shares</th>
                                <th>Total</th>
                            </tr>
                            <tr v-for="stock in stocks" :key="stock.company.id">
                                <td>{{ stock.company.name }}</td>
                                <td>{{ stock.price }}</td>
                                <td>{{ stock.shares }}</td>
                                <td>{{ stock.shares * stock.price }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
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
import StatBar from '../components/StatBar.vue'

export default {
    data() {
        return {
            stocks: [
                {company: {name: 'Snapple', id: 'asdf'}, price: 1.25, shares: 100},
                {company: {name: 'Netflix', id: 'qwer'}, price: 0.98, shares: 120},
            ]
        }
    },
    components: {
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
    background-color: #fff;
    border-top: 2px solid #f4f4f4;
    position: relative;
}

.portfolio-container .table-wrap {
    background-color: #ffffff;
    padding: 1.8rem;
    margin-top: 1rem;
}

.portfolio-list {
    table-layout: auto;
    width: 100%;
}

.portfolio-list th {
    text-align: left;
}

.portfolio-list tr {
    line-height: 2.2;
}

.portfolio-list td {
    border-bottom: 1px solid #aaaaaa;
}

.trade-history {
    padding: 0 1.6em;
}
</style>