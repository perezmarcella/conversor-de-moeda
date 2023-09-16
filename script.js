const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const valueToConvert = document.querySelector(".value-to-convert").value
    
    const currencyValue = document.querySelector(".currency-value")
    const currencyConverted = document.querySelector(".currency-converted")

    const dolarToday = 4.80
    const euroToday = 5.20

    currencyValue.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(valueToConvert)

    if(currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        }).format(valueToConvert / dolarToday)
    } 
    
    if(currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(valueToConvert / euroToday)
      
    }
 
}

function changeCurrency() {
   const currencyName = document.getElementById("name-to-convert")
   const currencyImage = document.querySelector(".currency-image")
   const currencyConverted = document.querySelector(".currency-converted")

   if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/usa.png"
  
   } 
   
   if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    
   }   

   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


