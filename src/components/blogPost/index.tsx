import { useAppDispatch } from '../../app/Hooks';
import IPost from '../../interfaces/IPost';
import { deletePost, updatePost } from '../../reducers/PostsReducer';

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
