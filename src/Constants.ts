const BASE_API_URL = 'https://bloggy-api.herokuapp.com';

const API = Object.freeze({
  GET_POSTs: (postId = -1) =>
    BASE_API_URL + `/posts${postId === -1 ? '' : `/${postId}`}`,
  CREATE_POST: () => BASE_API_URL + '/posts',
  DELETE_POST: (postId: number) => BASE_API_URL + `/posts/${postId}`,
  UPDATE_POST: (postId: number) => BASE_API_URL + `/posts/${postId}`,
  GET_COMMENTs: (postId = -1) =>
    BASE_API_URL + `/comments${postId === -1 ? '' : `?postId=${postId}`}`,
  CREATE_COMMENT: () => BASE_API_URL + '/comments',
});

const SLICE_NAMES = {
  POSTS: 'posts',
  COMMENTS: 'comments',
};

export { API, SLICE_NAMES };
