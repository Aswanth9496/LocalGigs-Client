
import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"


interface AuthState {
  user: null | { role: string; name: string; email: string };
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};


const authSlice = createSlice({

    name:'auth',
    initialState,
    reducers:{
        setCredentials:( state, action: PayloadAction<{ user: AuthState["user"]; accessToken: string }>)=>{
            state.user = action.payload.user;
            state.accessToken= action.payload.accessToken;
        },
        logout:(state)=>{
            state.user=null;
            state.accessToken=null;
        }
    }
});


export const {setCredentials,logout} = authSlice.actions;
export default authSlice.reducer;










