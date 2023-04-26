import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, {payload}) => {},
    loginSuccess: (state, {payload}) => {
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    logout: (state, {payload}) => {},
    logoutSuccess: (state, {}) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    getUser: (state, {}) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, {payload}) => {
      state.user = payload.user;
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
