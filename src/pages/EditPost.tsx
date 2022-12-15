import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/Hooks';
import Button from '../components/button';
import { ROUTES } from '../Constants';
import { updatePost } from '../reducers/PostsReducer';

const EditPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id: postId, title: prevTitle, body: prevBody } = state;

  const [title, setTitle] = useState(prevTitle);
  const [body, setBody] = useState(prevBody);

  const saveBtnClick = () => {
    if (prevTitle.length === 0 || prevBody.length === 0) {
      alert('All field must be filled out!');

      return;
    }

    void dispatch(
      updatePost({
        postId,
        payload: { title, body },
      })
    );
    navigate(ROUTES.HOME);
  };

  const backBtnClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <Button onclick={() => backBtnClick()} text="Back" />
      <br />

      <label htmlFor="postTitle">Post Title:</label>
      <br />
      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />

      <label htmlFor="postBody">Post Body:</label>
      <br />
      <textarea
        id="postBody"
        value={body}
        cols={100}
        rows={10}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <br />
      <Button onclick={() => saveBtnClick()} text="Save" />
    </div>
  );
};

export default EditPost;
