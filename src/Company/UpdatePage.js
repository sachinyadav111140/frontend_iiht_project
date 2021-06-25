import React, { Component } from 'react';
import CompanyService from '../service/CompanyService';

class UpdatePage extends Component {
constructor(props)
{
    super(props)
    this.state = {
        id: this.props.match.params.id,
        
        name: '',
        turnover: '',
        directors: '',
        ceo: '',
        sector: ''
    }
    this.changenamehandler=this.changenamehandler.bind(this);
    this.changeceohandler=this.changeceohandler.bind(this);
    this.changedirectorshandler=this.changedirectorshandler.bind(this);
    this.changeturnoverhandler=this.changeturnoverhandler.bind(this);
    this.changesectorhandler=this.changesectorhandler.bind(this);
    this.cancel=this.cancel.bind(this);
}
componentDidMount()
{
    console.log(this.state.id);
CompanyService.getcompanybyid(this.state.id).then((res)=>
{
    
    let company=res.data;
    console.log(company);
    this.setState({
        name:company.name,
        turnover:company.turnover,
        directors: company.directors,
        ceo: company.ceo,
        sector : company.sector

    })
}
);
}
changenamehandler=(e)=>
{
    this.setState({name:e.target.value});
}
changeceohandler=(e)=>
{
    this.setState({ceo:e.target.value});
}
changedirectorshandler=(e)=>
{
    this.setState({directors:e.target.value});
}
changeturnoverhandler=(e)=>
{
    this.setState({turnover:e.target.value});
}
changesectorhandler=(e)=>
{
    this.setState({sector:e.target.value});
} 
savecompany=(e)=>
{
    e.preventDefault();
    let company={name:this.state.name,turnover:this.state.turnover,directors:this.state.directors,
    ceo:this.state.ceo,sector:this.state.sector};
    console.log('company=>'+ JSON.stringify(company));
    CompanyService.updatecompany(this.state.id,company);
} 
cancel=(e)=>
{
this.props.history.push("admin/updatecompany");
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
                                    value={this.state.name} onChange={this.changenamehandler}/>

                                </div>
                                <div className="form-group">
                                    <label>Directors</label>
                                    <input placeholder="Directors" name="directors" className="form-control"
                                    value={this.state.directors} onChange={this.changedirectorshandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>CEO</label>
                                    <input placeholder="CEO" name="ceo" className="form-control"
                                    value={this.state.ceo} onChange={this.changeceohandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Turnover</label>
                                    <input placeholder="Turnover" name="turnover" className="form-control"
                                    value={this.state.turnover} onChange={this.changeturnoverhandler}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Sector</label>
                                    <input placeholder="Sector" name="sector" className="form-control"
                                    value={this.state.sector} onChange={this.changesectorhandler}/>
                                    
                                </div>
                                <button className="btn btn-success" onClick={this.savecompany}>Save  </button>
                               {' '}
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatePage;