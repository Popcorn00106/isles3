const currency = {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    palladium: 0,
};

function showCurrency() {
    const currencyDisplay = document.getElementById('currency');
    currencyDisplay.innerHTML = `
        Copper: ${currency.copper}<br>
        Silver: ${currency.silver}<br>
        Gold: ${currency.gold}<br>
        Platinum: ${currency.platinum}<br>
        Palladium: ${currency.palladium}<br>
    `;
}

function earnCurrency(type, amount) {
    if (currency[type] !== undefined) {
        currency[type] += amount;
        showCurrency();
    }
}
