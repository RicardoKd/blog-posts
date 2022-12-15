import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/Hooks';
import { ROUTES } from '../../Constants';
import IPost from '../../interfaces/IPost';
import { deletePost } from '../../reducers/PostsReducer';
import Button from '../button';
import { Post, PostHeader } from './style';

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

  const viewPostBtnClick = () => {
    navigate(ROUTES.VIEW_POST, { state: { id, title, body } });
  };

  return (
    <Post>
      <PostHeader>
        <h3>{title}</h3>
        <div>
          <Button onclick={() => viewPostBtnClick()} text="View" />
          <Button onclick={() => editPostBtnClick()} text="Edit" />
          <Button onclick={() => deletePostBtnClick()} text="Delete" />
        </div>
      </PostHeader>
      <div>
        <p>{body}</p>
      </div>
    </Post>
  );
};

export default BlogPost;
