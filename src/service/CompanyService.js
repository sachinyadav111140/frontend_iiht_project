import axios from 'axios';
const url="http://localhost:8080/displayallcompany";
const url2="http://localhost:8080/displayCompany";
const url3="http://localhost:8080/updatebasiccompany";
const url4="http://localhost:8080/addcompany";
class CompanyService{
    getCompanies()
    {
        return axios.get(url);
    }
    getcompanybyid(id)
    {
        return axios.get(url2 + "/"+id);
    }
    updatecompany(id,rqbody)
    {
        return axios.put(url3 + "/" + id,rqbody);
    }
    addcompany(requestbody)
    {
return axios.post(url4,requestbody)
    }
}
export default new CompanyService()