import React, { Component } from 'react';
import CompanyService from '../service/CompanyService';
import Ipo from '../service/Ipo';
import Multiselect from 'multiselect-react-dropdown';
import StockExchangeService from '../service/StockExchangeService';

class UpdateIpo extends Component {
constructor(props)
{
    super(props)
    this.multiselectRef = React.createRef();
    this.state = {
        id: this.props.match.params.id,
        
      
      
        companyname: '',
        price: '',
        number: '',
        date: '',
        time: '',
        stockex:[],
        stockexchanges:[]
    }
    this.changenamehandler=this.changenamehandler.bind(this);
    this.changepricehandler=this.changepricehandler.bind(this);
    this.changenumberhandler=this.changenumberhandler.bind(this);
    this.changedatehandler=this.changedatehandler.bind(this);
    this.changetimehandler=this.changetimehandler.bind(this);
    this.cancel=this.cancel.bind(this);
}
componentDidMount()
{
    
Ipo.getIpo(this.state.id).then((res)=>
{
    
    let ipo=res.data;
    console.log(ipo);
let ans=[];
ipo.stockex.map(item=>
   (ans.push({stockExchange:item}) 
    ))


    this.setState({
        companyname:ipo.companyname,
        price:ipo.price,
        number:ipo.number,
        date:ipo.date,
        time:ipo.time,
        stockex:ans

    })
}
);

  
  StockExchangeService.getStockExchange().then((res)=>{
    
this.setState({stockexchanges : res.data});
  });



}
changenamehandler=(e)=>
{
    this.setState({companyname:e.target.value});
}
changepricehandler=(e)=>
{
    this.setState({price:e.target.value});
}
changenumberhandler=(e)=>
{
    this.setState({number:e.target.value});
}
changedatehandler=(e)=>
{
    this.setState({date:e.target.value});
}
changetimehandler=(e)=>
{
    this.setState({time:e.target.value});
} 
savecompany=(e)=>
{
    e.preventDefault();
   
    let ans=this.multiselectRef.current.getSelectedItems();
    
    
            let b=[];
            ans.map(a=>(
             (b.push(a.stockExchange))));

   
    let company={id:this.state.id,companyname:this.state.companyname,price:this.state.price,number:this.state.number,
    date:this.state.date,time:this.state.time,stockex:b};
    console.log('company=>'+ JSON.stringify(company));
Ipo.updateipo(company);


} 
cancel=(e)=>
{
this.props.history.push("updatecompany");
}
render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <form>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input placeholder="Company Name" name="name" className="form-control"
                                    value={this.state.companyname} onChange={this.changenamehandler}/>

                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input placeholder="0" name="price" className="form-control"
                                    value={this.state.price} onChange={this.changepricehandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Number</label>
                                    <input placeholder="0" name="number" className="form-control"
                                    value={this.state.number} onChange={this.changenumberhandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input placeholder="yyyy/mm/dd" name="date" className="form-control"
                                    value={this.state.date} onChange={this.changedatehandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input placeholder="HH:MM" name="time" className="form-control"
                                    value={this.state.time} onChange={this.changetimehandler}/>
                                    
                                </div>
                               
                                <div className="form-group">
      <label>Stock Exchange</label>
      <Multiselect options={this.state.stockexchanges} displayValue="stockExchange" selectedValues={this.state.stockex} ref={this.multiselectRef}/>
        </div>
                               
                                <button className="btn btn-success" onClick={this.savecompany}>Save</button>
                              {' '}
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateIpo;