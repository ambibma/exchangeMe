export default class ExchangeService {
  static async getExchange(){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      console.log(response);
      const jsonResponse = await response.json();
      if (!response.ok){
        console.log(response);
        const errorMessage = `${response.status} ${jsonResponse['error-type']}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch(error){
      return error;
    
    }
  }
}