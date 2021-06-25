import React, { Component } from 'react';
import CompanyService from '../service/CompanyService';

class UpdateCompany extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            companies:[]
        }
this.editCompany=this.editCompany.bind(this);
this.editipo=this.editipo.bind(this);
    }
  
    editCompany(id){
        this.props.history.push(`updatepage/${id}`);
    }
    editipo(id)
    {
this.props.history.push(`updateipo/${id}`)
    }
  
    componentDidMount()
    {
        CompanyService.getCompanies().then((res)=>{
this.setState({companies : res.data});
        });
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Company List</h2>
                <div className="row">
<table className="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Company</th>
            
            <th>Directors</th>
            <th>CEO</th>
            <th>Turnover</th>
            <th>Sector</th>
            
            <th>Update</th>
        </tr>
    </thead>
    <tbody>
        {
            this.state.companies.map(company=>
                <tr key={company.id}>
                    <td>{company.name}</td>
<td>{company.directors}</td>
<td>{company.ceo}</td>

<td>{company.turnover}</td>
<td>{company.sector}</td>
<td>
    <button onClick={()=>this.editCompany(company.id)} className="btn btn-primary">Edit Company</button>
{' '}
    <button onClick={()=>this.editipo(company.id)} className="btn btn-secondary">Edit IPO</button>
    {' '}
    <button className="btn btn-primary">Delete</button>
</td>
           

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

export default UpdateCompany;