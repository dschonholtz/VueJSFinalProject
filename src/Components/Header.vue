<template>
<div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/portfolio"><a>Portfolio</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/stocks"><a>Stocks</a></router-link>
                </li>
            </ul>
            <ul class="navbar-nav mr-sm-3">
                <li class="nav-item">
                    <a class="nav-link" @click="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save/Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item">Save</a>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="/load"><a>Load</a></router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <span class="nav-link">Funds: {{getFunds.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                getFunds: 'myPortfolio/getFunds'
            })
        },
        methods: {
            ...mapActions({
                endDay: 'stocks/updatePrice'
            })
        }
    }
</script>

<style scoped>
    .dropdown:hover>.dropdown-menu {
        display: block;
    }
</style>
