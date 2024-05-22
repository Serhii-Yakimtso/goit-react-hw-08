import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { selectLoading } from '../contacts/selectors';

// seraf113@mail.com

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      // .addCase(register.pending, state => {
      //   // selectLoading = true;
      // })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // selectLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // selectLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),

  //     .addCase(logIn.fulfilled, (state, action) => {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(logOut.fulfilled, state => {
  //       state.user = {
  //         name: null,
  //         email: null,
  //       };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     }),
});

export const authReducer = authSlice.reducer;
