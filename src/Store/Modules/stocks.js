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
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

const mutations = {
    updatePrice: (state, payload) => {
        state.stocks.forEach(stock => {
            const randomChange = randn_normal_distro() - .4;
            stock.price *= randomChange;
        });
    },
};

const actions = {
    updatePrice: ({ commit }, payload) => {
        commit(mutations.updatePrice, payload);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
