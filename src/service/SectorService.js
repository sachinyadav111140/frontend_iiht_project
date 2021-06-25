import axios from 'axios'

const url="http://localhost:8080/addsector"
const url1="http://localhost:8080/getsector"
class SectorService
{
 addsector(requestbody)
    {
return axios.post(url,requestbody);
    }
    getsector()
    {
        return axios.get(url1);
    }
}
export default new SectorService()