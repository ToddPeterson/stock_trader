<template>
    <div class="container" :style="style">
        <div class="content">
            <div class="logo">
                <router-link :to="{name: 'home'}"><span class="thin">Stock</span>Trader</router-link>
            </div>
            <ul class="nav-links">
                <router-link tag="li" :to="{name: 'trade'}" class="nav-link">Trade</router-link>
                <router-link tag="li" :to="{name: 'portfolio'}" class="nav-link">Portfolio</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['transparent'],
    computed: {
        style() {
            const color = this.transparent ? 'transparent' : '#ffffff'
            return {
                backgroundColor: color
            }
        }
    }
}
</script>

<style scoped>
.container {
    height: 4rem;
    transition: background-color .6s;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}

.content {
    width: 70%;
    max-width: 1200px;
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
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
}

.nav-link,
.logo {
    transition: color 0.25s;
}

.nav-link:hover,
.logo:hover {
    color: #E5C48E;
}

.nav-link.router-link-exact-active {
    /* font-weight: 600; */
    border-bottom: 2px solid #E5C48E;
}

.logo {
    font-weight: 700;
    font-size: 24px;
}

.thin {
    font-weight: 300;
}
</style>