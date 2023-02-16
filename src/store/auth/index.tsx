import { createSlice } from '@reduxjs/toolkit';
import { UserRegister, UserLogin } from './api_action';

// start user register

interface UserRegisterState {
  newUser: {},
  error: Object | null | undefined
}

const initialStateUserRegister = {
  newUser: {},
  error: null,
} as UserRegisterState;

const UserRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: initialStateUserRegister,
  reducers: {},
  extraReducers: {
    [UserRegister.fulfilled.type]: (state, action) => {
      state.newUser = action.payload;
    },
    [UserRegister.rejected.type]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export { UserRegister };
export const userRegisterReducer = UserRegisterSlice.reducer;

// start user login

interface UserLoginState {
  userData: {},
  error: Object | null | undefined
}

const initialStateUserLogin = {
  userData: {},
  error: null,
} as UserLoginState;

const UserLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialStateUserLogin,
  reducers: {},
  extraReducers: {
    [UserLogin.fulfilled.type]: (state, action) => {
      state.userData = action.payload;
    },
    [UserLogin.rejected.type]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export { UserLogin };
export const userLoginReducer = UserLoginSlice.reducer;
