import ExchangeService from './exchangeCall';

async function getExchange(usd){
  const response = await ExchangeService.getExchange(usd);
  if(response.result === "success") {
    printElements(response, usd);
  } else {
    printError(response, usd);
  }
}


function printElements(response, usd) {
  document.getElementById('showExchange').innerText = `${usd} to ${response["conversion_rates"].USD}`
}

function printError(error, usd){
  document.getElementById('showExchange').innerText = `${usd} conversion failed. ${error.result}`
}

function handleFormSubmission(event){
  event.preventDefault();
  const usd = document.getElementById('usdInput').value
  getExchange(usd);

}

window.addEventListener("load", function(){
  document.getElementById("form").addEventListener("submit", handleFormSubmission);
});