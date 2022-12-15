import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/Hooks';
import Button from '../../components/button';
import { ROUTES } from '../../Constants';
import { updatePost } from '../../reducers/PostsReducer';
import EditPostWrapper from './style';

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
    <main>
      <EditPostWrapper>
        <Button onclick={() => backBtnClick()} text="Back" />
        <br />

        <label htmlFor="postTitle">Post Title:</label>
        <br />
        <input
          size={40}
          type="text"
          value={title}
          id="postTitle"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />

        <label htmlFor="postBody">Post Body:</label>
        <br />
        <textarea
          id="postBody"
          value={body}
          cols={100}
          rows={15}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <br />
        <Button onclick={() => saveBtnClick()} text="Save" />
      </EditPostWrapper>
    </main>
  );
};

export default EditPost;
