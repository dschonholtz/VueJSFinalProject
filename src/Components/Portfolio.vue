<template>
    <div class="container-fluid">
        <div class="row">
            <app-stock v-for="(stock, ticker) in getMyStockInfo()" v-bind:key="ticker"
                :companyName="stock.name"
                :ticker="ticker"
                :price="stock.price"
                :isMyPortfolio="true"
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
                getMyStocks: 'myPortfolio/getMyStocks'
            }),
        },
        methods: {
            getMyStockInfo() {
                let myStocks = {};
                const allStocks = this.getStocks;
                const owned = this.getMyStocks;
                for(let symbol in allStocks) {
                    if(symbol in owned) {
                        myStocks[symbol] = allStocks[symbol];
                    }
                }
                return myStocks;
            }
        }
    }
</script>

<style>

</style>