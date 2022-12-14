import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Constants';
import IComment from '../interfaces/IComment';

export const getComments = createAsyncThunk(
  'getComments',
  async (postId: number = -1): Promise<IComment[]> => {
    try {
      const response = await fetch(API.GET_COMMENTs(postId));
      const comments = await response.json();

      return comments;
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);

export const createComment = createAsyncThunk(
  'createComment',
  async (payload: { postId: number; body: string }): Promise<IComment> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(API.CREATE_COMMENT(), requestOptions);

      if (!response.ok) {
        throw new Error('not ok');
      }

      const comment = await response.json();

      return comment;
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);
