const button = document.getElementById("convert-button")
const select = document.getElementById("currencyChoose")
const dolar = 5.04
const euro = 5.98
const btc = 173799.23

const convertValues = () => {
    //const input = document.getElementById("valueToConvert").value
    const input = document.getElementById("valueToConvert").value
    const realValue = document.getElementById("realToConvert")
    const currencyValue = document.getElementById("currencyConverted")

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input);

    if (select.value === "US$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input / dolar);
    }
    
    if (select.value === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input / euro);
    }
    if (select.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('us-US', {
            style: 'currency',
            currency: 'use'
        }).format(input / btc);
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    const currencyValue = document.getElementById("currencyConverted")
    //document.getElementById("realToConvert").value = "R$ 0,00"

    if (select.value === "US$ Dólar americano") {
        currencyImage.src = "/assets/us-image.png"
        currencyName.innerHTML = "Dólar Americano"
    }

    if (select.value === "€ Euro") {
        currencyImage.src = "/assets/euro-image.png"
        currencyName.innerHTML = "Euro"
    }

    if (select.value === "Bitcoin") {
        currencyImage.src = "/assets/btc-image.png"
        currencyName.innerHTML = "Bitcoin"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)