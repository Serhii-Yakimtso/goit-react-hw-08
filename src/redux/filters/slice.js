import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => {
      state.name = '';
    }),
});

export const { changeNameFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
