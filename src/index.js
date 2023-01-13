import ExchangeService from './exchangeCall';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function getExchange(usd){
  const response = await ExchangeService.getExchange(usd);
  if(response.result === "success") {
    printElements(response, usd);
  } else {
    printError(response, usd);
  }
}


function printElements(response, usd) {
  let currencySelect = document.getElementById('selectCurrency').value;
  if(response['conversion_rates'][currencySelect]){
    let convertedAmount = usd * response['conversion_rates'][currencySelect];
    document.getElementById('showExchange').innerText = `${usd} USD is equal to ${parseFloat(convertedAmount).toFixed(2)} ${currencySelect}`;
  } 
}

function printError(error, usd){
  document.getElementById('showExchange').innerText = `${usd} conversion failed. ${error}`;
}

function handleFormSubmission(event){
  event.preventDefault();
  const usd = document.getElementById('usdInput').value;
  getExchange(usd);

}

window.addEventListener("load", function(){
  document.getElementById("form").addEventListener("submit", handleFormSubmission);
});