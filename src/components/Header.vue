<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <router-link :to="{name: 'home'}">Stock Trader</router-link>
            </div>
            <ul class="nav-links">
                <router-link tag="li" :to="{name: 'stocks'}">Stocks</router-link>
                <router-link tag="li" :to="{name: 'portfolio'}">Portfolio</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>