const state = {
    stocks: {
        'twtr': {
            name: 'Twitter',
            price: 38.31,
        },
        'msft': {
            name: 'Microsoft',
            price: 178.59,
        },
        'amzn': {
            name: 'Amazon',
            price: 2095.97,
        },
        'tsla': {
            name: 'Tesla',
            price: 901.00,
        },
        'kr': {
            name: 'Kroger',
            price: 30.31,
        },
        'ACB': {
            name: 'Aurora Cannabis',
            price: 0.795,
        },
        'F': {
            name: 'Ford',
            price: 5.58,
        },
        'GE': {
            name: 'GE',
            price: 7.75,
        },
        'GPRO': {
            name: 'GoPro',
            price: 2.72,
        },
        'DIS': {
            name: 'Disney',
            price: 101.50,
        },
        'AAPL': {
            name: 'Apple',
            price: 273.50,
        },
        'FIT': {
            name: 'Fitbit',
            price: 6.22,
        },
        'PLUG': {
            name: 'Plug Power',
            price: 3.33,
        },
        'SNAP': {
            name: 'Snap',
            price: 11.16,
        },
    }
};

const getters = {
    getAll: state => {
        return state.stocks;
    },
    getStockById: (state) => (symbol) => {
        return state.stocks[symbol];
    }
};

function randn_normal_distro() {
    // Generates a normal distribution from 0 - 1
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

const mutations = {
    'updatePrice' (state, payload) {
        for(let ticker in state.stocks) {
            // We want to on average go up more than we go down but we still want to go down sometimes
            // Modify range from 0->1 to -.498->.502 then add 1 so we get a change that is currentPrice times some value in the range 
            // .502->1.502 normally distributed around 1.02
            const randomChange = randn_normal_distro() - .498 + 1;
            state.stocks[ticker].price *= randomChange;
        }
    },
};

const actions = {
    updatePrice: ({ commit }, payload) => {
        commit('updatePrice', payload);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
