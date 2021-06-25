



import React,{component} from 'react';
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


import UpdateIpo from './IPO/UpdateIpo.js';
import User from './User.js';
import GetIpos from './IPO/GetIpos.js';
import File from './File.js';
function Third()
{
    return(
<Router>
    <div>
    
    <Admin/>
   <Switch>
  
    
   <Route path="/admin/Importdata" component={Importdata}/>
<Route path="/admin/ManageCompany" component={ManageCompany}/>
<Route path="/admin/addcompany" component={AddCompany}/>
<Route path="/admin/updatecompany" component={UpdateCompany}/>
<Route path="/admin/updatepage/:id" component={UpdatePage}/>
<Route path="/admin/updateipo/:id" component={UpdateIpo}/>
<Route path="/admin/addstockexchange" component={AddStockExchange}/>
<Route path="/admin/addsector" component={AddSector}/>
<Route path="/admin/file" component={File}/>

    </Switch>
    </div>
</Router>
    );

    
}
export default Third;