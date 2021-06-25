import axios from 'axios'

const url="http://localhost:8080/displayCompanyIpo"
const url1="http://localhost:8080/updateipo"
const url2="http://localhost:8080/displayUpcomingIpo"
class Ipo
{
 updateipo(requestbody)
    {
return axios.post(url1,requestbody);
    }
    getIpo(id)
    {
        return axios.get(url+"/"+id);
    }
    getipos()
    {
        return axios.get(url2);
    }
}
export default new Ipo()