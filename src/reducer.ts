
import { ADD_RECORD, RECORDS_LISTING } from "./constants";


type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};


export enum Types {
  Create = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
  Add = 'ADD_PRODUCT',
}


type RecordType = {
  title: string,
  upvotes: number,
//   date: ,
  id:number
}

type RecordPayload = {
  [Types.Create]: {
    //   id: number;
    id:number,
    title: string;
    upvotes: number;
    // date: Date;
  };
  // [Types.Delete]: {
  //   id: number;
  // }
}
// const 


export type RecordPayloadActions = ActionMap<RecordPayload>[keyof ActionMap<RecordPayload>];

export const recordsReducer = (state: RecordType[], action: RecordPayloadActions) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          title: action.payload.title,
          upvote: action.payload.upvotes,
        //   date: action.payload.date,
          id: action.payload.id,
        }
      ]
    default:
      return state
  }

}