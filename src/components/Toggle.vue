<template>
    <div class="toggle">
        <div class="option" :class="{selected: value}" @click="select(true)">
            <p>Buy</p>
        </div>
        <div class="option" :class="{selected: !value}" @click="select(false)">
            <p>Sell</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: true
        }
    },
    methods: {
        select(input) {
            this.value = input;
            this.$emit('input', input);
        }
    }
}
</script>

<style scoped>
.toggle {
    display: flex;
}

.option {
    display: flex;
    width: 50%;
    height: 2.2em;
    border: 1px solid #494949;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.5s;
}

.selected {
    background-color: #333;
    color: #e5c48e;
}
</style>