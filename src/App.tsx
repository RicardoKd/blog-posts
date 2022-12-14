import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/Hooks';
import { selectPostsStatus } from './app/PostsSlice';
import Header from './components/header';
import PostsContainer from './components/postsContainer';
import { getPosts } from './reducers/PostsReducer';

const App = () => {
  const dispatch = useAppDispatch();

  const postsStatus = useAppSelector(selectPostsStatus);

  useEffect(() => {
    void dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <Header />
      {postsStatus === 'fulfilled' ? (
        <PostsContainer />
      ) : (
        <div className="ldsRipple">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default App;
