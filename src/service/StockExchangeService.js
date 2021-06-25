import axios from 'axios'

const url="http://localhost:8080/addStockExchange"
const url1="http://localhost:8080/getStockExchange"
class StockExchangeService
{
 addstockexchange(requestbody)
    {
return axios.post(url,requestbody);
    }
    getStockExchange()
    {
        return axios.get(url1);
    }
}
export default new StockExchangeService()