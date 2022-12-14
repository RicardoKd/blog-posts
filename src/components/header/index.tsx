import { useAppDispatch } from '../../app/Hooks';
import { createPost } from '../../reducers/PostsReducer';

const Header = () => {
  const dispatch = useAppDispatch();

  const date = new Date(Date.now());

  const fullDate = `Today: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  const createPostBtnClick = () => {
    void dispatch(createPost({ title: 'This is title', body: 'This is body' }));
  };

  return (
    <header>
      <p>{fullDate}</p>
      <h1>Your Blog</h1>
      <button type="button" onClick={() => createPostBtnClick()}>
        Create post
      </button>
    </header>
  );
};

export default Header;
