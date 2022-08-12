import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Wallet = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value, "evant");
  };
  return (
    <div className="container mt-5" >
      <div className="row">
        <div className="col-md-12 d-flex ">
          <div className="col-md-3">
            <input
            style={{padding:'16px 4px'}}
               className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-3 ms-2">
            <input
            style={{padding:'16px 4px'}}
               className="form-control"
              placeholder="Amount"
              type='number'
            />
          </div>
          <div className="col-md-3 ms-2">
            <select size="lg" onChange={handleChange} style={{padding:'16px'}} className="form-control">
              <option value='select'>select</option>
              <option value='Credit'>Credit</option>
              <option value='Debit'>Debit</option>
            </select>
          </div>
          <div className="col-md-3 ms-2" >
         
             <Button variant="success"  className="form-control ps-2" style={{height: "56px" , width: "300px"}}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
