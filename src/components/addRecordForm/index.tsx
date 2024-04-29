

import { Grid } from "@mui/material";
import SimpleInput from "../simpleInput";
import Button from '@mui/material/Button';
import PrimaryBtn from "../primaryButton";



const inputList=[
  {name:"title",type:'text',placeholder:'Enter title...',label:''},
  {name:"upvotes",type:'number',placeholder:'Enter upvotes number between 0 to 100...',min:0,max:100},
  {name:"date",type:'date',placeholder:'Enter Date...'},
];


export interface BtnProps {
    // props:{
    label: string;
    onClick: string;
    disable?: number;
    style?: number;
    className?: string;
  // }
  }
const AddRecordForm = () => {
  return (
    <Grid container spacing={4}>
      {inputList.map((item,index)=>{
        return(
            <Grid item xs={12} md={12} key={`${item}`}>
                 <SimpleInput item={item}/> 
              
              </Grid>
        )
      })}
       
   {/* <PrimaryBtn 
      label={"Add Data"}
      // onClick={()=>{
      //   console.log("btn click")
      // }}
        >
          Hello world
    </PrimaryBtn> */}
       
    </Grid>
  )
}
export default AddRecordForm