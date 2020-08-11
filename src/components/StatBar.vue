<template>
    <div class="stats">
        <div class="item">
            <span class="stat-amount">${{ balance.toFixed(2) }}</span>
            <span class="stat-title">Balance</span>
        </div>
        <div class="item">
            <span class="stat-amount">63</span>
            <span class="stat-title">Trades</span>
        </div>
        <div class="item">
            <span class="stat-amount">${{ totalInvestment.toFixed(2) }}</span>
            <span class="stat-title">Total Investment</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState(['balance']),
        ...mapGetters(['totalInvestment'])
    }
}
</script>

<style scoped>
.stats {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 6rem;
    background-color: #333333;
    position: absolute;
    left: -15%;
    width: 110%;
}

.stats .item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-amount {
    color: white;
    font-weight: 600;
    font-size: 24px;
}

.stat-title {
    color: #e5c48e;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
}
</style>