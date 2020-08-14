<template>
    <div class="container">
        <div class="content">
            <div class="portfolio-container">
                <h3 class="overline section-title">Portfolio</h3>
                <div class="table-wrap">
                    <table class="portfolio-list" v-if="stocks.length > 0">
                        <tr>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Shares</th>
                            <th>Total</th>
                        </tr>
                        <tr v-for="stock in stocks" :key="stock.company.id">
                            <td>{{ stock.company.name }}</td>
                            <td>{{ stock.company.price }}</td>
                            <td>{{ stock.quantity }}</td>
                            <td>{{ stock.quantity * stock.company.price }}</td>
                        </tr>
                    </table>
                    <div class="empty-msg" v-else>
                        <p>You don't own any stocks.</p>
                        <router-link :to="{name: 'trade'}" class="btn call-to-action"><span>Start Trading</span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import StatBar from '../components/StatBar.vue';

export default {
    computed: mapState({
        stocks: state => state.stocks.filter(stock => stock.quantity > 0)
    }),
    components: {
        StatBar
    }
}
</script>

<style scoped>
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

.empty-msg p {
    margin-bottom: 1.6rem;
}
</style>