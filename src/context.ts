import React, {createContext, useReducer,Dispatch} from "react";
import { recordsReducer ,RecordPayloadActions} from "./reducer";

type RecordType={
    title:string,
    upvotes:number,
    id:number,
    date:Date
}

type InitialStateType={
    recordsList:RecordType[],
}

const initialState={
    recordsList:[]
}

var AppContext = createContext<{
    state: InitialStateType,
    dispatch: Dispatch<RecordPayloadActions>
  }>({
    state: initialState,
    dispatch: () => null
  });
  
const mainReducer = (
    { recordsList }: InitialStateType,
    action: RecordPayloadActions 
  ) => ({
    recordsList: recordsReducer(recordsList, action),
  });


const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };

  export {AppProvider,AppContext}

