let amountInput = document.getElementById('amountInput');
let convertBtn = document.getElementById('convertButton');
let fromCurrency = document.getElementById('fromCurrency');
let toCurrency = document.getElementById('toCurrency');
let result = document.getElementById('result');
let todayDate = document.getElementById('date');
let history = document.getElementById('history');
let clearHistoryBtn = document.getElementById('clearHistoryButton');

const API_KEY = '421f75b9ba1ad4b4673a635e8c12108a';
let currentDate = new Date().toISOString().split('T')[0];
todayDate.innerHTML = `On the ${currentDate} currency rate is:`;

let loadCurrencies = () => {
    fetch('https://data.fixer.io/api/latest?access_key=' + API_KEY)
        .then(response => response.json())
        .then(data => populateCurrenciesDropdown(Object.keys(data.rates)))
        .catch(error => alert(error));
}

let populateCurrenciesDropdown = (data) => {
    data.forEach(currency => {
        let optionFrom = new CustomElement('option', 'currencyElem').createElement();
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        let optionTo = new CustomElement('option', 'currencyElem').createElement();
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
    })
};
let convertCurrency = () => {
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }
    let from = fromCurrency.value;
    let to = toCurrency.value;
    fetch('https://data.fixer.io/api/latest?access_key=' + API_KEY)
        .then(response => response.json())
        .then(data => {
            let rates = data.rates;
            if (rates[from] && rates[to]) {
                let fromRate = rates[from];
                let toRate = rates[to];
                let convertedAmount = (amount / fromRate) * toRate;
                result.innerHTML = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
                saveData(result.innerText);
                printHistory();
            }
        }).catch(error => alert(error));
}
let saveData = (currencyText) => {
    let textData = JSON.parse(localStorage.getItem('history')) || [];
    textData.push(currencyText);
    localStorage.setItem('history', JSON.stringify(textData));
}
let printHistory = () => {
    let printHistory = JSON.parse(localStorage.getItem('history')) || [];
    history.innerHTML = '';
    printHistory.forEach((historyRecord, index) => {
        const recordClass = new CustomElement('div', 'historyRecord', `${index + 1}. ${historyRecord}`).createElement();
        history.appendChild(recordClass);
    })
}
let clearHistory = () => {
    localStorage.removeItem('history');
    history.innerHTML = '';
}


loadCurrencies();
printHistory();
convertBtn.addEventListener('click', convertCurrency);
clearHistoryBtn.addEventListener('click', clearHistory);


