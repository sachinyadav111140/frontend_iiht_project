import React, { Component } from 'react';
import { Button, ButtonGroup, Col } from 'reactstrap';
import { Link,useHistory } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';




const User = () => {
  const history = useHistory();
  const IPOclick=()=> history.push("/getipos");
  const Serviceclick=()=> history.push("/addcompany");
  const contactclick=()=> history.push("/addstockexchange");
  const companyclick=()=> history.push("/comparecompany");
  return (
    <>
    <div>
    <ButtonGroup className='d-flex' size="lg" style={{ marginTop: 50 }} >
        <Button outline color="primary " onClick ={IPOclick}>IPO</Button>
        <Button outline color="secondary"onClick={Serviceclick}>Services</Button>
        <Button outline color="success" onClick={contactclick}>Contact US</Button>
        <Button outline color="primary" onClick={companyclick}>Compare Any two companies</Button>
      </ButtonGroup>
    </div>
      
    </>
  );
};

export default User;