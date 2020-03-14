export const stockMixin = {
    computed: {
        searchMixin() {
            const allStocks = this.getStocks();
            if(this.searchText === '') {
                return allStocks;
            }
            let filteredStocks = {}
            for(let ticker in allStocks) {
                if(ticker.toLowerCase().includes(this.searchText.toLowerCase()) || allStocks[ticker].name.toLowerCase().includes(this.searchText.toLowerCase())) {
                    filteredStocks[ticker] = allStocks[ticker];
                }
            }
            return filteredStocks;
        },
    }
};