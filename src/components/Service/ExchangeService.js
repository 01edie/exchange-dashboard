import axios from "axios";

export class ExchangeService {
  static getExchangeData() {
    return axios.get("https://api.vatcomply.com/rates?base=USD");
  }
}
