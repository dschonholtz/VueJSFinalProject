
const state = {
    // Key value pair of symbol: Quantity
    myStocks: {
        'kr': 5
    },
    funds: 10000
};

const getters = {
    getMyStocks: state => {
        return state.myStocks;
    },
    getFunds: state => {
        return state.funds;
    }
};

const mutations = {
    'sellStock'(state, payload) {
        // assumes payload is a valid key in myStocks
        // assumes price is the current price of the stock
        // assumes quantity is a valid quantity
        const newFunds = payload.price * payload.quantity;
        state.funds += newFunds;
        state.myStocks[payload.symbol] -= payload.quantity;
        if(state.myStocks[payload.symbol] <= 0) {
            delete state.myStocks[payload.symbol];
        }
    },
    'buyStock' (state, payload) {
        // assumes payload is a valid key in myStocks
        // assumes price is the current price of the stock
        // assumes quantity is a valid quantity
        const removedFunds = payload.price * payload.quantity;
        state.funds -= removedFunds;
        const quantity = parseInt(payload.quantity);
        if (payload.symbol in state.myStocks) {
            state.myStocks[payload.symbol] += quantity;
        } else {
            state.myStocks[payload.symbol] = quantity;
        }
    },
};

const actions = {
    buyStock ({ commit }, payload) {
        commit('buyStock', payload);
    },
    sellStock ({ commit }, payload) {
        commit('sellStock', payload);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
