import { useAppDispatch } from '../../app/Hooks';
import IPost from '../../interfaces/IPost';
import { updatePost } from '../../reducers/PostsReducer';

const BlogPost = ({ post }: { post: IPost }) => {
  const { id, title, body } = post;
  const dispatch = useAppDispatch();

  const editPostBtnClick = () => {
    void dispatch(
      updatePost({
        postId: id,
        payload: { title: 'New Title', body: 'New Body' },
      })
    );
  };

  return (
    <div className="post">
      <div className="postHeader">
        <h3>{title}</h3>
        <button onClick={() => editPostBtnClick()} type="button">
          Edit
        </button>
      </div>
      <div className="postBody">{body}</div>
    </div>
  );
};

export default BlogPost;
