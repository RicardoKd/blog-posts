import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAMES } from '../Constants';
import IPostsState from '../interfaces/IPostsState';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from '../reducers/PostsReducer';

const initialState: IPostsState = {
  value: [],
  status: 'idle',
};

export const postsSlice = createSlice({
  name: SLICE_NAMES.POSTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value.push(action.payload);
      })
      .addCase(updatePost.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value.push(action.payload);
      })
      .addCase(deletePost.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.value.splice(
          state.value.findIndex((post) => post.id === action.payload),
          1
        );
      });
  },
});
