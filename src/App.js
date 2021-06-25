import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import UserService from './service/UserService';
class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { user: [], name: "", password: "", email: "" ,usertype:"Admin",confirmed:"",num:""};
    this.submit = this.submit.bind(this);
    this.changehandler1 = this.changehandler1.bind(this);
    this.fetchhttp = this.fetchhttp.bind(this);
    this.posthttpjson = this.posthttpjson.bind(this);
    this.posthttp =this.posthttp.bind(this);
   this.login=this.login.bind(this)
    //this.changehandler2 = this.changehandler2.bind(this);
    //this is for testing
  }
  login(e)
  {
e.preventDefault();
  let a="";
  let b="";
    let uu={
      email:this.state.email,
      password:this.state.password,
      usertype:this.state.usertype
    };
let jj;
UserService.login(uu).then((r)=>
  {

let    k=r.data;
console.log("k="+k);
jj=k; 

 
if(jj.res)
{
  if(jj.type=="Admin")
this.props.history.push("/admin")
else if(jj.type=="Non-Admin")
this.props.history.push("/user")
} 
else{
  alert("First Signup")
}
});
}
  submit(e) {
    e.preventDefault();
    var usr = this.state.user;
    usr.push({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      usertype: this.state.usertype,
      num:this.state.num
    });
    this.setState({ user: usr });
    console.log(JSON.stringify(this.state.user)+"TEST");
	 // this.fetchhttp(e);
     // this.posthttp(e);
     this.posthttpjson(e);
  }

  changehandler1(e) {
    if (e.target.name === "name"){
			this.setState({ name: e.target.value });
		} 

    else if(e.target.name === "email"){
    	this.setState({ email: e.target.value });
	}
    else if  (e.target.name === "password"){
   	 
   	 this.setState({ password: e.target.value });
}     
else if  (e.target.name === "usertype"){
  
  this.setState({ usertype: e.target.value });
    
  }
  
    else if  (e.target.name === "num"){
  
      this.setState({ num: e.target.value });
        
      }
    }
//backup get method to create users ,in case post does not work
	posthttp(e) { 

    console.log("posthttp");

    alert('Your favorite flavor is: ');
    const myInit1  = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json',
			'Access-Control-Allow-Origin' : '*',
			'Vary': 'Origin' },

	};
   
    let finalurl = 'http://127.0.0.1:8080/setuserapi?username='+this.state.name+'&password='
    +this.state.password+'&email='+this.state.email+'&userType='+this.state.userType+'&confirmed='
    +this.state.confirmed+'&mobile='+this.state.mobile+'';
    
	
		fetch(finalurl, myInit1)
      .then((response) => {
          console.log("success");
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch((error) => console.error(error));

  } 
	posthttpjson(e) {
    

      console.log("posthttpjson");
  
      const myInit1  = 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Vary': 'Origin'.replace,
        'Accept': 'application/json'
        },
        body: JSON.stringify({
    "name" :this.state.name,
    "email" :this.state.email,
      "password": this.state.password,//make sure these match with java entity class properties to avoid error
       "usertype":this.state.usertype,
       "confirmed":this.state.confirmed,
       "num": this.state.num   
        })
      };
      this.setState({ name: '' });
      this.setState({ password: '' });
      this.setState({ email: '' });
      this.setState({ confirmed: '' });
      this.setState({ num: '' });
      alert("Confirm Email");
      let finalurl = 'http://127.0.0.1:8080/setuserapi2';
      fetch(finalurl, myInit1)
        .then((response) => 
        {
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
        })
        .catch((error) => console.error(error));
	}



  fetchhttp(e) {
  
    console.log("fetchhttp");

    const myInit1 = { method: "GET" };
         
    let finalurl = "http://127.0.0.1:8080/companies/findById/1";
    //////
    fetch(finalurl, myInit1)
      .then((response) => {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch((error) => console.error(error));
  } 
  
  render() 
  {
    return (
      // 
      <div className="container bg-info">
      <div className="row">
          <div className="card col-md-10 offset-md-1 offset-md-1">
              

      
      <form > 
      <div className="form-group">
     <label>Name</label>
        <input
          type="username"
          name="name" className="form-control"
          placeholder="Enter Your Name"
          value={this.state.name}
          ref="username"
          onChange={this.changehandler1}/>
        </div>
        <div className="form-group">
     <label>Email</label>
        <input
          type="email" className="form-control"
          name="email"
          placeholder="Enter Your Email"
          value={this.state.email}
          ref="email"
          onChange={this.changehandler1}
        />
         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
     <label>Password</label>
        <input
          type="password" className="form-control"
          name="password"
          placeholder="Password should be Strong"
          value={this.state.password}
          ref="password"
          onChange={this.changehandler1}
        />
        </div>
        <div className="form-group">
     <label>Mobile</label>
        <input
          type="Long" className="form-control"
          name="num"
          placeholder="Enter Your Mobile Number"
          value={this.state.num}
          ref="num"
          onChange={this.changehandler1}
        />
        </div>
        
        <div className="form-group">
     <label>Type</label>
        <select name="usertype" onChange={this.changehandler1}  className="form-control">
          <option value="Admin">Admin</option>
          <option value="Non-Admin">User</option>
        </select>{" "}
        </div>
        
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={this.submit}>Sign Up</button>
      {' '}  <button className="btn btn-warning" onClick={this.login}>Login If already Regestered</button>
      
        {/* <button onClick={this.posthttpjson}>
  Submit
</button> */}
      </form>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
