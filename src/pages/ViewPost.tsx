import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectCommentsState } from '../app/CommentsSlice';
import { useAppDispatch } from '../app/Hooks';
import { ROUTES } from '../Constants';
import { createComment, getComments } from '../reducers/CommentsReducer';

const ViewPost = () => {
  const { status, value: comments } = useSelector(selectCommentsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { id: postId, title, body } = state;

  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    void dispatch(getComments(postId));
  }, []);

  const backBtnClick = () => {
    navigate(ROUTES.HOME);
  };

  const postCommentBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setCommentText('');

    void dispatch(createComment({ postId, body: commentText }));
  };

  return (
    <div>
      <button onClick={() => backBtnClick()} type="button">
        Back
      </button>
      <h3>{title}</h3>
      <p>{body}</p>
      <section>
        <h4>Comments</h4>
        <form onSubmit={(e) => postCommentBtnClick(e)} method="post">
          <input
            type="text"
            placeholder="Your comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Post comment</button>
        </form>
        {status === 'fulfilled' ? (
          <div className="commentsWrapper">
            {comments.map((comment, index) => (
              <p key={index}>{comment.body}</p>
            ))}
          </div>
        ) : (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ViewPost;
