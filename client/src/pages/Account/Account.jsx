import React, { useState, useEffect } from 'react';
import { Button } from "@progress/kendo-react-buttons";

import AccountGrid from './Grid';
// import AppForm from './AppForm';
import AppForm from './AppForm2';

/* eslint-disable */
const Account = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [mode, setMode] = useState(null);
  // const dataGrid = useState(accounts); 

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
      />
      
      <div className="buttons-container mb-5">
        <Button
          className="buttons-container-button"
          iconClass={formVisible ? 'fas fa-undo' : 'fas fa-plus'}
          onClick={() => { setFormVisible(!formVisible); setMode('ADD'); }  }
        >
          {formVisible ? 'Return' : 'Add'}
        </Button>
      </div>
      {
        formVisible ? (<AppForm setFormVisible={setFormVisible} currentId={currentId} mode={mode} />) : (<AccountGrid setFormVisible={setFormVisible} setCurrentId={setCurrentId} setMode={setMode} />)
      }
    </>
  );
};

export default Account;