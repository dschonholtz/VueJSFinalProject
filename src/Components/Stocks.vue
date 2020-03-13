<template>
    <div class="container-fluid">
        <div class="row">
            <app-stock v-for="(stock, ticker) in getStocks" v-bind:key="ticker"
                :companyName="stock.name"
                :ticker="ticker"
                :price="stock.price"
                :isMyPortfolio="false"
            >
            </app-stock>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters({
                getStocks: 'stocks/getAll',
            }),

        }
    }
</script>

<style>

</style>