const BASE_API_URL = 'https://bloggy-api.herokuapp.com/posts';

const API = Object.freeze({
  GET_ALL_POSTS: (postId = -1) =>
    BASE_API_URL + `/posts${postId === -1 ? '' : `/${postId}`}`,
  DELETE_POST: (postId: number) => BASE_API_URL + `/posts/${postId}`,
  UPDATE_POST: (postId: number) => BASE_API_URL + `/posts/${postId}`,
  GET_COMMENTs: (postId = -1) =>
    BASE_API_URL + `/comments${postId === -1 ? '' : `?postId=${postId}`}`,
});

export { API };
