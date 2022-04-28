import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { getAccounts } from '../../actions/account';

const EditCommandCell = (props) => {
  return (
    <td>
      <div className="flex gap-1">
        <i class="fas fa-eye bg-lime-700 p-1 text-white text-xs rounded shadow-xl hover:opacity-90 cursor-pointer" onClick={() => props.enterView(props.dataItem)}></i>
        <i class="fas fa-trash-alt bg-red-800 p-1 text-white text-xs rounded shadow-xl hover:opacity-90 cursor-pointer" onClick={() => props.enterView(props.dataItem)}></i>
      </div>
      
    </td>
  );
};

const AccountGrid = ({setCurrentId, setFormVisible, setMode}) => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);
  
  const MyViewCommandCell = (props) => (
    <EditCommandCell {...props} enterView={enterView} />
  );

  const enterView = (item) => {
    setFormVisible(true);
    setMode('VIEW');
    setCurrentId(item._id);
  };

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return (
    <Grid
      style={{
        height: "350px",
      }}
      data={accounts}
    >
      <GridColumn field="account_name" title="Account Name" width="250px" />
      <GridColumn field="email" title="Email" width="300px" />
      <GridColumn cell={MyViewCommandCell} width="240px" />
    </Grid>
  )
}

export default AccountGrid