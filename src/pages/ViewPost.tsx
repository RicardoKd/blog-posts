import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectCommentsState } from '../app/CommentsSlice';
import { useAppDispatch } from '../app/Hooks';
import Button from '../components/button';
import Comment from '../components/comment';
import Loader from '../components/loader';
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
    if (commentText.length === 0) {
      alert('Can`t post empty comment!');

      return;
    }

    setCommentText('');

    void dispatch(createComment({ postId, body: commentText }));
  };

  return (
    <div className="viewPostCard">
      <Button onclick={() => backBtnClick()} text="Back" />
      <h3>{title}</h3>
      <p className="viewpostBody">{body}</p>
      <section>
        <h4>Comments</h4>
        <form onSubmit={(e) => postCommentBtnClick(e)} method="post">
          <textarea
            rows={4}
            cols={80}
            placeholder="Your comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <br />
          <Button text="Post comment" type="submit" />
        </form>
        {status === 'fulfilled' ? (
          <div className="commentsWrapper">
            {comments.map((comment, index) => (
              <Comment text={comment.body} key={index} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default ViewPost;
