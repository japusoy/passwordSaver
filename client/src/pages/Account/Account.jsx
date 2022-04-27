import React, { useState, useEffect } from 'react';

import AccountGrid from './Grid';
// import AppForm from './AppForm';
import AppForm from './AppForm2';

/* eslint-disable */
const Account = () => {
  const [formVisible, setFormVisible] = useState(false);
  // const dataGrid = useState(accounts);  

  return (
    <>
      <AccountGrid/>
      {
        formVisible ? (<AppForm />) : ``
      }
    </>
  );
};

export default Account;