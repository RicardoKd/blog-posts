import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../app/Hooks';
import { updatePost } from '../reducers/PostsReducer';

const EditPost = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const { id: postId } = state;

  const a = () => {
    void dispatch(
      updatePost({
        postId,
        payload: { title: 'New Title', body: 'New Body' },
      })
    );
  };

  return (
    <>
      <button onClick={() => a()} type="button">
        Save updates
      </button>
    </>
  );
};

export default EditPost;
