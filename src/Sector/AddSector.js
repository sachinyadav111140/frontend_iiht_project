import React, { Component } from 'react';
import SectorService from '../service/SectorService';
import StockExchangeService from '../service/StockExchangeService';

class AddSector extends Component {
constructor(props)
{
    super(props)
    this.state={
    name:'',
	
	brief:'',
	
    }
   this.sectorhandler=this.sectorhandler.bind(this)
   this.briefhandler=this.briefhandler.bind(this)
   
   this.savesector=this.savesector.bind(this)
} 
sectorhandler(event)
{
    this.setState({
name:event.target.value
    })
}
briefhandler(event)
{
    this.setState({
brief:event.target.value
    })
}

savesector(e)
{
    e.preventDefault();
    let sector={name:this.state.name, brief:this.state.brief
}
SectorService.addsector(sector);
console.log(JSON.stringify(sector));

}

    render() {
        return (
            <div>
            <div className="container bg-info">
                <div className="row">
                    <div className="card col-md-8 offset-md-1 offset-md-1">
                        <form>
                            <div className="form-group">
                                <label>Sector</label>
                                <input placeholder="Enter Sector" name="name" className="form-control"
                                value={this.state.name} onChange={this.sectorhandler}/>

                            </div>
                            <div className="form-group">
                                <label>Brief</label>
                                <input placeholder="Brief Idea about Sector" name="brief" className="form-control"
                                value={this.state.brief} onChange={this.briefhandler}/>
                                
                            </div>
                            
                           
                            

                            <button className="btn btn-primary" onClick={this.savesector}>Save</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddSector;