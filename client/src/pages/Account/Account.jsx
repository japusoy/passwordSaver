import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

import AccountGrid from './Grid';
// import AppForm from './AppForm';
import AppForm from './AppForm2';

/* eslint-disable */
const Account = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);
  const [accountData, setAccountData] = useState({ account_name: '', email: '', username: '', password: '', note: '<p>The KendoReact Editor allows you</p>' });
  // const dataGrid = useState(accounts);  

  return (
    <>
      <AccountGrid/>
      <AppForm />
    </>
  );
};

export default Account;