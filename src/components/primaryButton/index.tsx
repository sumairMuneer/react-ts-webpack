

import * as React from "react";
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';


import './style.css'
interface Props{
  props:{type:string}
}


export interface BtnProps {
  // props:{
  label: string;
  // onClick: Function;
  // disable?: number;
  // style?: number;
  // className?: string;
// }
}
// }
const PrimaryBtn: React.FC = (props): JSX.Element  =>(
  // const item=props.item
  // return (
    <Grid item xs={12} md={12} key={`sfd`}>
      
      {/* <Button variant="contained" className="primary-green">{props.label}</Button> */}

      </Grid>
  )
// }
export default PrimaryBtn