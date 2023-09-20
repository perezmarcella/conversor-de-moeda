const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
// const currencyToConvert = document.querySelector(".currency-to-convert")

function convertValues() {
    const valueToConvert = document.querySelector(".value-to-convert").value
    const currencyValue = document.querySelector(".currency-value")
    
    const currencyConverted = document.querySelector(".currency-converted")

    const dolarToday = 4.80
    const euroToday = 5.20
    const libraToday = 6.00
    const bitcoinToday = 132000.00


    if(currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
    }).format(valueToConvert)
    }

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

    if(currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(valueToConvert / libraToday)
      
    }

    if(currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "BTC"
        }).format(valueToConvert / bitcoinToday)
    }
 
}

function changeCurrency() {

   const currencyName = document.getElementById("name-to-convert")
   const currencyImage = document.querySelector(".currency-image")

   if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }

   if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/usa.png"
  
   } 
   
   if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    
   }   

    if(currencySelect.value == "libra") {
     currencyName.innerHTML = "Libra Esterlina"
     currencyImage.src ="./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
     currencyName.innerHTML = "Bitcoin"
     currencyImage.src = "./assets/bitcoin.png"
    }

   convertValues()
}


// function changeCurrencyToConvert() {
//     const currencyToConvertName = document.querySelector(".currency-name")
//     const currencyToConvertImage = document.querySelector(".img-to-convert")
    
//     if(currencyToConvert.value == "real") {
//         currencyToConvertName.innerHTML = "Real"
//         currencyToConvertImage.src = "./assets/brasil.png"
//     }

//     if(currencyToConvert.value == "dolar") {
//         currencyToConvertName.innerHTML = "Dólar Americano"
//         currencyToConvertImage.src = "./assets/usa.png"
//     }
    
//     if(currencyToConvert.value == "euro") {
//         currencyToConvertName.innerHTML = "Euro"
//         currencyToConvertImage.src = "./assets/euro.png"  
//     }
    
//     if(currencyToConvert.value == "libra") {
//         currencyToConvertName.innerHTML = "Libra Esterlina"
//         currencyToConvertImage.src = "./assets/libra.png"  
//     }

//     if(currencyToConvert.value == "bitcoin") {
//         currencyToConvertName.innerHTML = "Bitcoin"
//         currencyToConvertImage.src = "./assets/bitcoin.png"
//     }

// }

// function changeValuesToConvert(){
//     const currencyValue = document.querySelector(".currency-value")
//     const valueToConvert = document.querySelector(".value-to-convert").value

//     if(currencyToConvert.value == "real") {
//         currencyValue.innerHTML = new Intl.NumberFormat ("pt-br", {
//             style: "currency",
//             currency: "BRL"
//         }).format(valueToConvert)
//     }

//     if(currencyToConvert.value == "dolar") {
//         currencyValue.innerHTML = new Intl.NumberFormat ("en-us", {
//             style: "currency",
//             currency: "USD"
//         }).format(valueToConvert)
//     }

//     if(currencyToConvert.value == "euro") {
//         currencyValue.innerHTML = new Intl.NumberFormat ("de-De", {
//             style: "currency",
//             currency: "EUR"
//         }).format(valueToConvert)
//     }

//     if(currencyToConvert.value == "libra") {
//         currencyValue.innerHTML = new Intl.NumberFormat ("en-GB", {
//             style: "currency",
//             currency: "GBP"
//         }).format(valueToConvert)
//     }

//     if(currencyToConvert.value == "bitcoin") {
//         currencyValue.innerHTML = new Intl.NumberFormat ("en-us", {
//             style: "currency",
//             currency: "BTC"
//         }).format(valueToConvert)
//     }
    

    

// }

// currencyToConvert.addEventListener("change", changeCurrencyToConvert)
// currencyToConvert.addEventListener("change", changeValuesToConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


