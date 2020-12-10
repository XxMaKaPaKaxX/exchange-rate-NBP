const nbpUrl = 'https://api.nbp.pl/api/exchangerates/tables/a/';

let dolar;
let euro;
let rubl;
let hryvnia;

fetch(nbpUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
        ratesNBP.interestedRates = data[0].rates.filter(curency => interestedCurency.includes(curency.code));
        dolar = ratesNBP.getDolarExchangeRate();
        euro = ratesNBP.getEuroExchangeRate();
        rubl = ratesNBP.getRublExchangeRate();
        hryvnia = ratesNBP.getHryvniaExchangeRate();

        document.querySelector('.dollar__rate').textContent = `= ${dolar.mid} zł`;
        document.querySelector('.euro__rate').textContent = `= ${euro.mid} zł`;
        document.querySelector('.rubl__rate').textContent = `= ${rubl.mid} zł`;
        document.querySelector('.hryvnia__rate').textContent = `= ${hryvnia.mid} zł`;
    })

