import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAMES } from '../Constants';
import ICommentsState from '../interfaces/ICommentsState';
import { getComments, createComment } from '../reducers/CommentsReducer';

import { RootState } from './Store';

const initialState: ICommentsState = {
  value: [],
  status: 'idle',
};

export const commentsSlice = createSlice({
  name: SLICE_NAMES.COMMENTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value.push(action.payload);
      });
  },
});

export const selectCommentsState = (state: RootState) => state.comments;
export const selectComments = (state: RootState) => state.comments.value;
export const selectCommentsStatus = (state: RootState) => state.comments.status;

export default commentsSlice.reducer;
