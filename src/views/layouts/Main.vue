<template>
    <div class="container">
        <div class="content">
            <div class="col col-main">
                <div class="col-header">
                    <h1>{{ title }}</h1>
                    <button class="btn" @click="endDay">End Day</button>
                </div>
                <div class="page-content">
                    <slot></slot>
                </div>
            </div>
            <div class="col col-side">
                <div class="col-header">
                    <stat-bar></stat-bar>
                </div>
                <div class="trade-history">
                    <h3 class="overline section-title">Trade History</h3>
                    <div class="transaction" v-for="item in transactions">
                        {{ item.company.abbr }} | {{ item.quantity }} | {{ item.price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import StatBar from '../../components/StatBar.vue';

export default {
    components: {
        StatBar
    },
    computed: {
        ...mapState(['transactions']),
        title() {
            switch (this.$route.name) {
                case 'trade':
                    return "Trade"
                    break;
                case 'portfolio':
                    return "Overview"
                    break;
                default:
                    return ""
                    break;
            }
        }
    },
    methods: {
        ...mapActions(['endDay'])
    }
}
</script>

<style scoped>
.content {
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    padding-top: 4rem;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
}

.page-content {
    position: relative;
}

.col-main {
    width: 70%;
    padding: 0 4em;
}

.col-side {
    width: 30%;
    background-color: #fff;
    border-top: 2px solid #f4f4f4;
    position: relative;
}

.col-header {
    height: 10rem;
    padding-top: 2em;
}

.trade-history {
    padding: 0 1rem;
}
</style>