<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="mt-2 md-form col-lg-3 col-md-6 col-sm-12">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="searchText">
            </div>
        </div>
        <div class="row">
            <app-stock v-for="(stock, ticker) in searchMixin" v-bind:key="stock.name"
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
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';
    import { stockMixin } from '../Mixins/StockMixin';

    export default {
        components: {
            appStock: Stock
        },
        methods: {
            ...mapGetters({
                getStocks: 'stocks/getAll',
            }),
        },
        data() {
            return {
                searchText: '',
            }
        },
        mixins: [stockMixin]
    }
</script>

<style>
</style>