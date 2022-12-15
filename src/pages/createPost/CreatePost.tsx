import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/Hooks';
import Button from '../../components/button';
import { ROUTES } from '../../Constants';
import { createPost } from '../../reducers/PostsReducer';
import CreatePostWrapper from './style';

const CreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const saveBtnClick = () => {
    if (title.length === 0 || body.length === 0) {
      alert('All field must be filled out!');

      return;
    }

    void dispatch(createPost({ title, body }));
    navigate(ROUTES.HOME);
  };

  const backBtnClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <main>
      <CreatePostWrapper>
        <Button onclick={() => backBtnClick()} text="Back" />
        <br />

        <label htmlFor="postTitle">Post Title:</label>
        <input
          size={40}
          type="text"
          value={title}
          id="postTitle"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />

        <label htmlFor="postBody">Post Body:</label>
        <textarea
          id="postBody"
          value={body}
          cols={100}
          rows={15}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <br />
        <Button onclick={() => saveBtnClick()} text="Save" />
      </CreatePostWrapper>
    </main>
  );
};

export default CreatePost;
