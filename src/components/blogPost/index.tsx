import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/Hooks';
import { ROUTES } from '../../Constants';
import IPost from '../../interfaces/IPost';
import { deletePost } from '../../reducers/PostsReducer';

const BlogPost = ({ post }: { post: IPost }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const editPostBtnClick = () => {
    navigate(ROUTES.EDIT_POST, { state: { id } });
  };

  const deletePostBtnClick = () => {
    void dispatch(deletePost(id));
  };

  return (
    <div className="post">
      <div className="postHeader">
        <h3>{title}</h3>
        <div>
          <button onClick={() => editPostBtnClick()} type="button">
            Edit
          </button>
          <button onClick={() => deletePostBtnClick()} type="button">
            Delete
          </button>
        </div>
      </div>
      <div className="postBody">{body}</div>
    </div>
  );
};

export default BlogPost;
