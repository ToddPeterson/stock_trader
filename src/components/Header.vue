<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <router-link :to="{name: 'home'}">StockTrader</router-link>
            </div>
            <ul class="nav-links">
                <router-link tag="li" :to="{name: 'stocks'}" class="nav-link">Stocks</router-link>
                <router-link tag="li" :to="{name: 'portfolio'}" class="nav-link">Portfolio</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.content {
    width: 60%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-links {
    list-style: none;
    display: flex;
    width: 14em;
    justify-content: space-between;
}

.nav-link {
    font-size: 20px;
    cursor: pointer;
}

.nav-link, .logo {
    transition: color 0.25s;
}

.nav-link:hover, .logo:hover {
    color: #41B984;
}

.nav-link.router-link-exact-active {
    /* font-weight: 600; */
    border-bottom: 2px solid #41B984;
}

.logo {
    font-weight: 700;
    font-size: 24px;
}
</style>