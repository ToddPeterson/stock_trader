<template>
    <div id="app">
        <app-header :transparent="onHome"></app-header>
        <router-view name="layout">
            <router-view></router-view>
        </router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        appHeader: Header
    },
    computed: {
        onHome() {
            return this.$route.name === 'home';
        }
    },
    created() {
        // Init stock list
        this.$store.commit('init');

        // Run a few days to initialize price history
        for (let i = 0; i < 7; i++) {
            this.$store.dispatch('endDay');
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    min-height: 100%;
    position: relative;
}

body {
    background-color: #F4F4F4;
    padding-top: 4rem;
}

#app {
    font-family: 'Open Sans', sans-serif;
}

a {
    text-decoration: none;
    color: inherit;
}

.btn {
    color: #E5C48E;
    background: #333;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    transition: color 0.3s, background-color 0.3s;
    border: none;
}

.btn:hover {
    background-color: #1b1b1b;
    color: #f8be61;
}

.call-to-action span {
  position: relative;
  display: inline-block;
  transition: 0.5s;
}

.call-to-action span::after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -30px;
  transition: 0.5s;
}

.call-to-action:hover span {
  padding-right: 15px;
}

.call-to-action:hover span::after {
  opacity: 1;
  right: -7px;
}

.section-title {
    font-weight: 400;
    font-size: 22px;
}

.overline::before {
    display: block;
    position: relative;
    left: 0;
    top: -8px;
    width: 2.5rem;
    border-bottom: 2px solid #E5C48E;
    content: " ";
}
</style>
