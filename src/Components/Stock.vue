<template>
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card card-default mt-3 stock">
            <div class="card-header" :class="{'isMyPortfolio': this.isMyPortfolio}">
                <div class="row">
                    <div class="col">
                        <h4>
                            {{companyName}}
                        </h4>
                    </div>
                    <div v-if="this.quantityOwned() > 0" class="col text-right">
                        Quantity: {{this.quantityOwned()}}
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <small>({{ticker}})</small>
                    </div>
                    <div class="col text-right">
                        Price: {{price.toFixed(2)}}
                    </div>
                </div>
            </div>
            <div class="card-content">
                <form>
                    <div class="row mt-2">
                        <div class="col form-group">
                            <input type="text" placeholder="Quantity" class="form-control" v-model="quantity">
                        </div>
                        <div class="col form-group text-right">
                            <button 
                            v-if="sellIsAllowed()"
                            class="btn btn-primary sell" 
                            @click.prevent="sellStockWrapper({symbol: ticker, price: price, quantity: quantity})"
                            :disabled="!(quantity <= getMyStocks[ticker] && Number.isInteger(parseInt(quantity)))"
                            >Sell</button>
                            <button 
                            class="btn btn-primary" 
                            @click.prevent="buyStockWrapper({symbol: ticker, price: price, quantity: quantity})"
                            :disabled="!buyIsAllowed"
                            >Buy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        props: ['companyName', 'ticker', 'price', 'isMyPortfolio'],
        methods: {
            ...mapActions({
                buyStock: 'myPortfolio/buyStock',
                sellStock: 'myPortfolio/sellStock',
            }),
            quantityOwned() {
                return (!(this.ticker in this.getMyStocks) ? 0 : this.getMyStocks[this.ticker])
            },
            buyStockWrapper(data) {
                this.buyStock(data);
                this.quantity = '';
            },
            sellStockWrapper(data) {
                this.sellStock(data);
                this.quantity = '';
            },
            sellIsAllowed() {
                return this.ticker in this.getMyStocks;
            },
        },
        data() {
            return {
                quantity: ''
            }
        },
        computed: {
            ...mapGetters({
                getFunds: 'myPortfolio/getFunds',
                getMyStocks: 'myPortfolio/getMyStocks'
            }),
            buyIsAllowed() {
                const enoughCash = this.getFunds >= this.quantity * this.price;
                return this.quantity > 0 && Number.isInteger(parseInt(this.quantity)) && enoughCash;
            },
        }
    }

</script>

<style scoped>
    .card-body {
        font-family: 'Arizonia';
        font-size: 18px;
        color: #6e6e6e;
    }

    .stock {
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 3px 2px 2px #474747;
        transition: box-shadow 0.3s ease-in-out;
    }

    .card-header {
        background-color: #d9f5d9;
        color: #3c9c3c;
    }

    .card-header.isMyPortfolio {
        background-color: #d9e4f5;
        color: #3c5a9c;
    }

    .card-content {
        padding-left: 10px;
        padding-right: 10px;
    }

    .btn-primary {
        background-color: #52c952;
    }

    .btn-primary.sell {
        background-color: #e0483d;
    }

    h4 {
        font-weight: bold;
        margin-bottom: 0%;
    }

    .btn:disabled {
        cursor: not-allowed;
    }
</style>