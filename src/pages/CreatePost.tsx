import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/Hooks';
import { createPost } from '../reducers/PostsReducer';
import './App.css';

const CreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const saveBtnClick = () => {
    dispatch(createPost({ title, body }));
    navigate(ROUTES.HOME)
  };

  return (
    <div>
      <label htmlFor="postTitle">Post Title:</label>
      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.innerText)}
      />
      <label htmlFor="postBody">Post Body:</label>
      <textarea
        id="postBody"
        value={body}
        cols={30}
        rows={10}
        onChange={(event) => setBody(event.target.innerText)}
      ></textarea>
      <button onClick={() => saveBtnClick()} type="button">
        Save
      </button>
    </div>
  );
};

export default CreatePost;
