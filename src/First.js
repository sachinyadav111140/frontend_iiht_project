import React,{Component} from 'react';
import App from './App.js';
import Admin from './Admin.js';
import Importdata from './Importdata';
import ManageCompany from './Company/ManageCompany.js';
import AddCompany from './Company/AddCompany.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UpdateCompany from './Company/UpdateCompany.jsx';
import UpdatePage from './Company/UpdatePage.js';
import AddStockExchange from './StockExchange/AddStockExchange.js';
import AddSector from './Sector/AddSector.js';
import { Container } from 'react-dom';

import UpdateIpo from './IPO/UpdateIpo.js';
import User from './User.js';
import GetIpos from './IPO/GetIpos.js';
import Second from './Second.js';
import Third from './Third.js';


class first extends Component {
   constructor(props)
   {
       super(props)
       
       
   }
    
    render() {
        const mystyle=
        {
            position: "absolute",
            top: "25px",
            right: "16px",
            color:"black"
           };
       
        return (
            <div>
                
                  <div>
        
                 
        <Router>
        
       
      

 <nav class="navbar navbar-light bg-danger ">
 <a class="navbar-brand" href="/">Stock Market</a>
  <a class="navbar-brand" href="/">Stock Market</a>
  <a class="navbar-brand" href="/">Stock Market</a>
</nav>
<br></br>
<a class="btn btn-warning" href="/" role="button" style={mystyle} >Logout</a>
     <div>
           <Switch>
           <Route  exact path="/" component={App}/>
            <Route path="/user" component={Second}/>
            <Route path="/admin" component={Third}/>
            </Switch>
            </div>
        </Router>
        </div>


 <footer class="page-footer font-large blue">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> google.com</a>
  </div>
</footer>
            </div>
        );

    }
}

export default first;
/*function First()
{
    return(
        <div>
        
       
<Router>
    <div>
    <Button  onClick=(this.logout)>Log Out</Button>
   <Switch>
   <Route  exact path="/" component={App}/>
    <Route path="/user" component={Second}/>
        <Route path="/admin" component={Third}/>
      
  
    
    
    
    </Switch>
    </div>
</Router>
</div>
  
  );

    
}
export default First;*/