import React from 'react';
import { Grid, GridColumn } from "@progress/kendo-react-grid";

const AccountGrid = ({ data }) => {
  return (
    <Grid
      style={{
        height: "350px",
      }}
      data={data}
    >
      <GridColumn field="account_name" title="Account Name" width="250px" />
      <GridColumn field="email" title="Email" width="300px" />
      <GridColumn field="username" title="Username" width="300px" />
      <GridColumn field="password" title="Password" width="300px" />
    </Grid>
  )
}

export default AccountGrid