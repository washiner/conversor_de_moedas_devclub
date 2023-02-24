const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 12385900


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value')



    //realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    //currencyValueText.innerHTML = inputReais / dolar

    if (select.value === "US$ Dólar Americano") {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)

    }


    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === "BitCoin") {
        currencyValueText.innerHTML = (inputReais / bitcoin).toFixed(8)
    }
    
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-image')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/estados_unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (select.value === 'BitCoin') {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }



    convertValues()

    //console.log(select.value)
}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)