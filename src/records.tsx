import React, { useContext } from 'react';
// import { AppContext } from './context';
import { Types } from './reducer';
import Button from '@mui/material/Button';

const Products = () => {
//   const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button onClick={() => {
        // dispatch({
        //   type: Types.Create,
        //   payload:{id:1,title:'sumair',upvotes:2}
        // })
      }}>
        click fgafd
        </button>


   {/* <Button variant="contained">Hello world</Button> */}
    </div>
  )
}

export default Products;