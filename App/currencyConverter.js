const currencyConverter  = () => {
    const currencylist = document.querySelector('#selectCurrency');
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
            crateOfselectedCurency = rubl.mid;
          break;
        default:
            crateOfselectedCurency = hryvnia.mid;
      }

    console.log(selectedCurency, amountForChange, rateOfselectedCurency)
    const result = (amountForChange * rateOfselectedCurency).toFixed(2);
    resultWindow.value = `${result} zł`;
}

const btnCalculate = document.querySelector('#btnCalculate');
const resultWindow = document.querySelector('#result');

btnCalculate.addEventListener('click', currencyConverter);