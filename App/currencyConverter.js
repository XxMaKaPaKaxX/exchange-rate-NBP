const currencylist = document.querySelector('#selectCurrency');
const btnCalculate = document.querySelector('#btnCalculate');
const resultWindow = document.querySelector('#result');

const currencyConverter  = () => {    
    const amountForChange = Number(document.querySelector('#currency__amount').value);
    const selectedCurency = currencylist.value;
    let rateOfselectedCurency;    
    
    switch (selectedCurency) {
        case 'USD':
            rateOfselectedCurency = dolar.mid;
          break;
        case 'EUR':
            rateOfselectedCurency = euro.mid;
            break
        case 'RUB':
            rateOfselectedCurency = rubl.mid;
          break;
        default:
          rateOfselectedCurency = hryvnia.mid;
    }
    const result = (amountForChange * rateOfselectedCurency).toFixed(2);
    resultWindow.textContent = `${result} zł`;
}



btnCalculate.addEventListener('click', currencyConverter);