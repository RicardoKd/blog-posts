import { useAppSelector } from '../../app/Hooks';
import { selectPosts } from '../../app/PostsSlice';
import BlogPost from '../blogPost';
import BlogPostsWrapper from './style';

const PostsContainer = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <main>
      <BlogPostsWrapper>
        {posts.map((post, index) => (
          <BlogPost post={post} key={index} />
        ))}
      </BlogPostsWrapper>
    </main>
  );
};

export default PostsContainer;
