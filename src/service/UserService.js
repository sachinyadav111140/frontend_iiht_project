import axios from 'axios';
const url="http://localhost:8080/login";
const url2="http://localhost:8080/displayCompany";
const url3="http://localhost:8080/updatebasiccompany";
const url4="http://localhost:8080/addcompany";
class UserService{
    
    login(requestbody)
    {
return axios.post(url,requestbody)
    }
}
export default new UserService()