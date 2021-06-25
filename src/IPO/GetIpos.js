import React, { Component } from 'react';
import CompanyService from '../service/CompanyService';
import Ipo from '../service/Ipo';

class GetIpos extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            ipos:[]
        }

    }
  
    
  
    componentDidMount()
    {
        console.log(1)
        Ipo.getipos().then((res)=>{
            console.log(res.data)
this.setState({ipos : res.data});
        });
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Upcoming IPO</h2>
                <div className="row">
<table className="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Company</th>
            
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Number</th>
            
        
        </tr>
    </thead>
    <tbody>
        {
            this.state.ipos.map(ipo=>
                <tr key={ipo.name}>
<td>{ipo.companyname}</td>                    
<td>{ipo.date}</td>
<td>{ipo.time}</td>
<td>{ipo.price}</td>
<td>{ipo.number}</td>



           

                </tr>
                )
        }
    </tbody>
</table>
                </div>
            </div>
        );
    }
}

export default GetIpos;