<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Open Sans', sans-serif;
}

a {
    text-decoration: none;
    color: inherit;
}

.btn {
    border: 2px solid #41B984;
    color: #41B984;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    transition: color 0.3s, background-color 0.3s;
}

.btn:hover {
    background-color: #41B984;
    color: white;
}
</style>
