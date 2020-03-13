<template>
    <div>
        <br>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './Components/Header.vue';
    import Portfolio from './Components/Portfolio.vue';
    export default {
        data() {
            return {
                componentId: 'appPortfolio'
            }
        },
        components: {
            appHeader: Header,
            appPortfolio: Portfolio,
        }
    }
</script>

<style>

</style>
