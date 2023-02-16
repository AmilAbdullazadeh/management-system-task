import {createAsyncThunk} from '@reduxjs/toolkit';
import client from '../../client';

export const UserRegister = createAsyncThunk('userRegister', async (config, thunkAPI) => {
  try {
    const data = await client('/register', config);
    localStorage.setItem('newUser', JSON.stringify(data));
    return data;
  } catch (error) {
    // @ts-ignore
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const UserLogin = createAsyncThunk(
  'userLogin',
  async (config, thunkAPI) => {
    try {
      const data = await client('/login', config);
      localStorage.setItem('userData', JSON.stringify(data));
      return data;
    } catch (error) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
