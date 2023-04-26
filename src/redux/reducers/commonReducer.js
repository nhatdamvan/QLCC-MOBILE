import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  colorrdata: '#000000',
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    color_picker_set_action: (state, {payload}) => {
      console.log('payload', payload.data);
      state.colorrdata = payload.data;
    },
  },
});

export const commonActions = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
