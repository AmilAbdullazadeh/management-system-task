import {createAsyncThunk} from '@reduxjs/toolkit';
import client from '../../client';

export const UserData = createAsyncThunk(
  'userData',
  async (config, thunkAPI) => {
    try {
      const data = await client('users')
      localStorage.setItem('AllUsers', JSON.stringify(data))
      return data
    } catch (error) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(error.response)
    }
  })

export const UserCreate = createAsyncThunk(
  'userCreate',
  async (config, thunkAPI) => {
    // @ts-ignore
    try {
      const data = await client(`users`, config)
      return data
    } catch (error) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(error.response)
    }
  })
