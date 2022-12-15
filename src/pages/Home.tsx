import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/Hooks';
import { selectPostsStatus } from '../app/PostsSlice';
import Header from '../components/header';
import Loader from '../components/loader';
import PostsContainer from '../components/postsContainer';
import { getPosts } from '../reducers/PostsReducer';

const Home = () => {
  const dispatch = useAppDispatch();

  const postsStatus = useAppSelector(selectPostsStatus);

  useEffect(() => {
    void dispatch(getPosts());
  }, []);

  return (
    <>
      <Header />
      {postsStatus === 'fulfilled' ? <PostsContainer /> : <Loader />}
    </>
  );
};

export default Home;
