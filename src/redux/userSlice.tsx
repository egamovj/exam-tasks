import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  address: Address;
  phone: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface CounterState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  data: [],
  loading: false,
  error: '',
};

export const getUsers = createAsyncThunk<User[]>('user', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.error = action.payload.message;
        state.data = [];
      });
  },
});

export default userSlice.reducer;
