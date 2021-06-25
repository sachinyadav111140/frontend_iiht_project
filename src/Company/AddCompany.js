import React from "react";
import logo from "../logo.svg";
import "../App.css";
import axios from 'axios';
import StockExchangeService from "../service/StockExchangeService";
import CompanyService from "../service/CompanyService";
import SectorService from "../service/SectorService";
import Multiselect from 'multiselect-react-dropdown';  


class AddCompany extends React.Component {
  constructor(props) {
    super(props);
    this.multiselectRef = React.createRef();
    this.state = { user: [], name: "", turnover: "", directors: "",sector:"tech",
writeup:"",ipodate:"",no:"",price:"",time:"",stockexchange:[],stockexchanges:[],sectors:[],sector:""};
  
    this.changehandler1 = this.changehandler1.bind(this);
  this.savecompany=this.savecompany.bind(this);
    
  }
  componentDidMount()
  {
    SectorService.getsector().then((r)=>
    {
      this.setState({sectors:r.data});
    });
    StockExchangeService.getStockExchange().then((res)=>{
      
this.setState({stockexchanges : res.data});
    });
  
  }


  changehandler1(e) {
    if (e.target.name === "name"){
			this.setState({ name: e.target.value });
		} 

    else if (e.target.name === "turnover"){
        this.setState({ turnover: e.target.value });
    } 
    else if  (e.target.name === "directors"){
        this.setState({ directors: e.target.value });
    } 
else if (e.target.name === "sector"){
    this.setState({ sector: e.target.value });
} 
else if (e.target.name === "ipodate"){
    this.setState({ ipodate: e.target.value });
} 
else if (e.target.name === "no"){
    this.setState({ no: e.target.value });
} 
else if (e.target.name === "price"){
    this.setState({ price: e.target.value });
} 
else if (e.target.name === "writeup"){
    this.setState({ writeup: e.target.value });
} 
else if (e.target.name === "time"){
    this.setState({ time: e.target.value });
} 
else if (e.target.name === "stockexchange"){
    this.setState({ stockexchange: e.target.value });
} 
}

  
  savecompany(e)
  {
    e.preventDefault();
    var arr=[];let ans=this.multiselectRef.current.getSelectedItems();
    
    console.log(ans);
            let b=[];
            ans.map(a=>(
             (b.push(a.stockExchange))));
   
    var arr2= arr.concat(this.state.stockexchange);
    let com={  name: this.state.name,
      turnover : this.state.turnover,
      directors : this.state.directors,
      sector: this.state.sector,
      ipodate: this.state.ipodate,
      no: this.state.no,
      price: this.state.price,
      writeup: this.state.writeup,
      time: this.state.time,
      stockexchange: b,

    }
    console.log(JSON.stringify(com));
    CompanyService.addcompany(com);
  }
  render() {
    return (


      
      <div className="container bg-info">
          <div className="row">
              <div className="card col-md-10 offset-md-1 offset-md-1">
      <form >
      <div className="form-group">
      <label>Company Name</label>
      <input placeholder="Enter Your Company Name" name="name" className="form-control"
       value={this.state.name} onChange={this.changehandler1}/>

      </div>

      <div className="form-group">
      <label>Company's Sector</label>
      <select name="sector" className="form-control" onChange={this.changehandler1}>
      {this.state.sectors.map(sec=>
          <option value={sec.name}>
            {sec.name}
          </option>)}
          </select>
          </div>
          <div className="form-group">
      <label> Select Stock Exchange</label>
      <Multiselect options={this.state.stockexchanges} displayValue="stockExchange" ref={this.multiselectRef}/>
        </div>
        <div className="form-group">
      <label>Directors</label>
        <input name="directors" placeholder="All Name Should Be Seprated By Comma(,) " className="form-control" value={this.state.directors} onChange={this.changehandler1}/>
        </div>
        
        <div className="form-group">
      <label>Time</label>
      <input placeholder="HH:MM" name="time" className="form-control"
       value={this.state.time} onChange={this.changehandler1}/>

      </div>
      <div className="form-group">
      <label>Writeup</label>
      <input placeholder="writeup" name="writeup" className="form-control"
       value={this.state.writeup} onChange={this.changehandler1}/>

      </div>
      <div class="bg-secondary">
        <label > This is For IPO</label>
      <div className="form-group">
      <label>Price</label>
      <input placeholder="0" name="price" className="form-control"
       value={this.state.price} onChange={this.changehandler1}/>

      </div>
      <div className="form-group">
      <label>IPO Date</label>
      <input placeholder="yyyy/mm/dd" name="date" className="form-control"
       value={this.state.date} onChange={this.changehandler1}/>

      </div>
      <div className="form-group">
      <label>Number of Shares</label>
      <input placeholder="0" name="no" className="form-control"
       value={this.state.no} onChange={this.changehandler1}/>
</div>
<div className="form-group">
      <label>Turnover</label>
      <input placeholder="0" name="turnover" className="form-control"
       value={this.state.turnover} onChange={this.changehandler1}/>
</div>
      </div>
      <button className="btn btn-primary" onClick={this.savecompany}>Save</button>
      </form>
      </div>
      </div>
      </div>
      
    );
  }
}
export default AddCompany;