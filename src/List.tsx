import React, { useState } from "react";
// import { AppContext } from "./context";
import { Types } from "./reducer";

const List = () => {
  const [form, setForm] = React.useState({
    title: "",
    upvotes: 0
  });
//   const { state ,dispatch } = React.useContext(AppContext);

  const handleForm = (type: string, value: string) => {
    setForm(form => ({
      ...form,
      [type]: value
    }));
  };

  const createRecord = () => {
    // dispatch({
    //   type: Types.Create,
    //   payload: {
    //     id: Math.round(Math.random() * 10000),
    //     title: form.title,
    //     upvotes: form.upvotes
    //   }
    // });
  };

//   const deleteProduct = (id: number) => {
//     dispatch({
//       type: Types.Delete,
//       payload: {
//         id,
//       }
//     })
//   }

const [state,setState]=useState({recordsList:[
    {title:"simaior",upvotes:"updafd"}
]})
  return (
    <div>
      <input
        value={form.title}
        onChange={e => {
          handleForm("title", e.target.value);
        }}
        placeholder="Name"
      />
      <input
        value={form.upvotes}
        type="number"
        onChange={e => {
          handleForm("upvotes", e.target.value);
        }}
        placeholder="upvotes"
      />
      <button onClick={createRecord}>create</button>
      <div style={{ marginTop: 20 }}>
        {state.recordsList.map(c => (
          <div>
            <span>{c.title}</span>
            <span>{c.upvotes}</span>
            {/* <button onClick={() => deleteProduct(c.id)}>delete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
