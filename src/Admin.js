import React from 'react';
import { Button, ButtonGroup, Col } from 'reactstrap';
import { useHistory } from 'react-router';
const Admin = () => {
  const history = useHistory();
  const importclick=()=> history.push("/admin/file");
  const addcompanyclick=()=> history.push("/admin/addcompany" );
  const updatecompanyclick=()=> history.push("/admin/updatecompany");
  const addstockclick=()=> history.push("/admin/addstockexchange");
  const addsectorclick=()=> history.push("/admin/addsector" );

  return (
    <>
    <div>
    <ButtonGroup className='btn-group-veretical ' size="lg" style={{ marginTop: 50 }} >
       <Button outline color="success" onClick={addsectorclick}>Add Sector</Button>
       <Button outline color="secondary"onClick={addstockclick}>Add StockExchange</Button>
        <Button outline color="primary"onClick={addcompanyclick}>Add Company</Button>
        <Button outline color="success" onClick={updatecompanyclick}>Show Company</Button>
        <Button outline color="primary " onClick ={importclick}>Import Data</Button>
      </ButtonGroup>
    </div>
    </>
  );
};

export default Admin;



