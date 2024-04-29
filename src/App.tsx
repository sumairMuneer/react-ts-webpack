

import * as React from "react";
// import { AppProvider } from './context';
import Products from './records';
import BasicTable from "./components/basicTable";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddRecordForm from "./components/addRecordForm"
import { AppProvider } from "./context";


const App:React.FC= () => {
  return (
    <AppProvider>
      <div style={{margin:20,marginTop:40}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{padding:40}}>
            <AddRecordForm/>
          </Paper>
          </Grid>
          <Grid item xs={12} md={8} >

          
          <div style={{paddingLeft:'10%',paddingRight:'10%',marginBottom:15}}>

          <TextField id="search_field"    
                  fullWidth
                  placeholder="search the record"
                  />
          </div>
          
            <Paper elevation={3} >
              <BasicTable/>
              </Paper>
          </Grid>
        </Grid>
      </div>
    </AppProvider>
  )
}
export default App