import {configureStore} from '@reduxjs/toolkit';
import loadingsReducer from "./loadings";
import {userRegisterReducer, userLoginReducer} from './auth';
import { userDataReducer } from './users';
import {IUsers, ITasks, IOrganizations} from "../models";

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    loadings: loadingsReducer,
    register: userRegisterReducer,
    login: userLoginReducer,
    users: userDataReducer
  }
})

export interface RootState {
  loadings: any,
  register: { newUser: IOrganizations, error: Object | string },
  login: { userData: IOrganizations, error: Object | string },
  users: { userData: IUsers[], error: Object | string },
}
