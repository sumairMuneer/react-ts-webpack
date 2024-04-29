

import * as React from "react";
// import { AppProvider } from './context';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";

import './style.css'
interface Props{
  item:{type:string}
}

export interface Item {
  item:{
  name: string;
  type?: string;
  min?: number;
  max?: number;
  placeholder?: string;
}
}
const SimpleInput = ({item}:Item) =>(
  // const item=props.item
  // return (
    <Grid item xs={12} md={12} key={`${item}`}>
      
      <TextField id={`${item}`}
        type={item.type}
        fullWidth
        placeholder={item?.placeholder|| item.name}
        // label={item?.label|| item?.name} 
        />
      </Grid>
  )
// }
export default SimpleInput