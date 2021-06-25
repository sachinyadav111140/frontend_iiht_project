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
import compareCompany from './charts/compareCompany.js';
function Second()
{
    return(
<Router>
    <div>
    <User/>
   <Switch>
  
    
    
      <Route path="/getipos" component={GetIpos}/>
      <Route path="/comparecompany" component={compareCompany}/>
    </Switch>
    </div>
</Router>
    );

    
}
export default Second;