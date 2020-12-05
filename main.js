const widget = document.querySelector('.widget');

ratesNBP.getInterestedRates();  // initialization

const dolar = ratesNBP.getDolarExchangeRate();
const euro = ratesNBP.getEuroExchangeRate();
const rubl = ratesNBP.getRublExchangeRate();
const hryvnia = ratesNBP.getHryvniaExchangeRate();


document.querySelector('.dollar__rate').textContent = `= ${dolar.mid} zł`;
document.querySelector('.euro__rate').textContent = `= ${euro.mid} zł`;
document.querySelector('.rubl__rate').textContent = `= ${rubl.mid} zł`;
document.querySelector('.hryvnia__rate').textContent = `= ${hryvnia.mid} zł`;

