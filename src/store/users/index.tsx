import {createSlice} from '@reduxjs/toolkit';
import {UserData, UserCreate} from './api_action';
import {IUsers} from "../../models";

interface UserState {
  userData: IUsers[],
  error: Object | null | undefined
}

const initialStateUserData = {
  userData: [],
  error: null
} as UserState

const cache: any = localStorage.getItem('AllUsers')

const UserDataSlice = createSlice({
  name: 'userData',
  initialState: initialStateUserData,
  reducers: {},
  extraReducers: {
    [UserData.fulfilled.type]: (state, action) => {
      state.userData = navigator.onLine ? action.payload : JSON.parse(cache)
    },
    [UserData.rejected.type]: (state, action) => {
      state.error = action.error.message
      state.userData = JSON.parse(cache)
    }
  }
})

export {UserData}
export const userDataReducer = UserDataSlice.reducer

// start user create

interface UserCreateState {
  newUser: {},
  error: Object | null | undefined
}

const initialStateUserCreate = {
  newUser: {},
  error: null
} as UserCreateState

const UserCreateSlice = createSlice({
  name: 'userCreate',
  initialState: initialStateUserCreate,
  reducers: {},
  extraReducers: {
    [UserCreate.fulfilled.type]: (state, action) => {
      state.newUser = action.payload
    },
    [UserCreate.rejected.type]: (state, action) => {
      state.error = action.error.message
    }
  }
})

export {UserCreate}
export const userCreateReducer = UserCreateSlice.reducer
