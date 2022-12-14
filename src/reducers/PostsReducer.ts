import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Constants';
import IPost from '../interfaces/IPost';

export const getPosts = createAsyncThunk(
  'getPosts',
  async (postId: number = -1): Promise<IPost[]> => {
    try {
      const response = await fetch(API.GET_POSTs(postId));
      const posts = await response.json();

      return posts;
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);

export const createPost = createAsyncThunk(
  'createPost',
  async (payload: { title: string; body: string }): Promise<IPost> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(API.CREATE_POST(), requestOptions);

      if (!response.ok) {
        throw new Error('not ok');
      }

      const post = await response.json();

      return post;
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  'updatePost',
  async ({
    postId,
    payload,
  }: {
    postId: number;
    payload: { title: string; body: string };
  }): Promise<IPost> => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(API.UPDATE_POST(postId), requestOptions);

      if (!response.ok) {
        throw new Error('not ok');
      }

      const post = await response.json();

      return post;
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  'deletePost',
  async (postId: number) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await fetch(API.DELETE_POST(postId), requestOptions);

      if (!response.ok) {
        throw new Error('not ok');
      }

      return await Promise.resolve(postId);
    } catch (error) {
      console.log(error);

      return await Promise.reject(error);
    }
  }
);
