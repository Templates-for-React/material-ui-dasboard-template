import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginUser: (state) => {
      state.isAuthenticated = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = authSlice.actions

export default authSlice.reducer