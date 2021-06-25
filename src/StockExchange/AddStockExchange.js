import React, { Component } from 'react';
import StockExchangeService from '../service/StockExchangeService';

class AddStockExchange extends Component {
constructor(props)
{
    super(props)
    this.state={
    stockExchange:'',
	
	brief:'',
	address:'',
	remarks:''
    }
   this.stockexchangehandler=this.stockexchangehandler.bind(this)
   this.briefhandler=this.briefhandler.bind(this)
   this.addresshandler=this.addresshandler.bind(this)
   this.remarkshandler=this.remarkshandler.bind(this)
   this.savestockexchange=this.savestockexchange.bind(this)
} 
stockexchangehandler(event)
{
    this.setState({
stockExchange:event.target.value
    })
}
briefhandler(event)
{
    this.setState({
brief:event.target.value
    })
}
addresshandler(event)
{
    this.setState({
address:event.target.value
    })
}
remarkshandler(event)
{
    this.setState({
remarks:event.target.value
    })
}
savestockexchange(e)
{e.preventDefault();
    let stock={stockExchange:this.state.stockExchange, brief:this.state.brief,
address:this.state.address,
remarks:this.state.remarks}
console.log(JSON.stringify(stock));
StockExchangeService.addstockexchange(stock);


}

    render() {
        return (
            <div>
            <div className="container bg-info">
                <div className="row">
                    <div className="card col-md-8 offset-md-1 offset-md-1">
                        <form>
                            <div className="form-group">
                                <label>Stock Exchange</label>
                                <input placeholder="Stock Exchange" name="stockExchange" className="form-control"
                                value={this.state.stockExchange} onChange={this.stockexchangehandler}/>

                            </div>
                            <div className="form-group">
                                <label>Brief</label>
                                <input placeholder="Brief idea about stock-Exchange" name="brief" className="form-control"
                                value={this.state.brief} onChange={this.briefhandler}/>
                                
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input placeholder="Address" name="address" className="form-control"
                                value={this.state.address} onChange={this.addresshandler}/>
                                
                            </div>
                            <div className="form-group">
                                <label>Remarks</label>
                                <input placeholder="Address Remarks" name="remarks" className="form-control"
                                value={this.state.remarks} onChange={this.remarkshandler}/>
                                
                            </div>
                            

                            <button className="btn btn-primary" onClick={this.savestockexchange}>Save</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddStockExchange;