const interestedCurency = ['USD', 'EUR', 'RUB', 'UAH'];

const  ratesNBP = {
    name: "NBP",
    interestedRates: [],

    getDolarExchangeRate: () => {
        const dolar = ratesNBP.interestedRates.find(curency => curency.code === 'USD')
        return dolar;
    },

    getEuroExchangeRate: () => {
        const euro = ratesNBP.interestedRates.find(curency => curency.code === 'EUR')
        return euro;
    },

    getRublExchangeRate: () => {
        const rubl = ratesNBP.interestedRates.find(curency => curency.code === 'RUB')
        return rubl;
    },

    getHryvniaExchangeRate: () => {
        const uah = ratesNBP.interestedRates.find(curency => curency.code === 'UAH')
        return uah;
    }
};
