import React from "react";
import logo from "../logo.svg";
import "../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

class ManageCompany extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
      <Link to="/addcompany">add company</Link>
      <Link to="/updatecompany">update company</Link>
      
   </div> 
    );}}
export default ManageCompany;