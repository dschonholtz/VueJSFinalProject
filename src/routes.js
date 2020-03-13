import Portfolio from './Components/Portfolio.vue';
import Stocks from './Components/Stocks.vue';
import Load from './Components/Load.vue';
import Home from './Components/Home.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stocks},
    { path: '/load', component: Load},
    { path: '*', component: Home},
];