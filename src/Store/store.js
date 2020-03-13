import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './Modules/stocks';
import myPortfolio from './Modules/myPortfolio';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        myPortfolio,
        stocks
    }
});