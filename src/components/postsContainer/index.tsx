import { useAppSelector } from '../../app/Hooks';
import { selectPosts } from '../../app/PostsSlice';
import BlogPost from '../blogPost';

const PostsContainer = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <main>
      {posts.map((post, index) => (
       <BlogPost post={post} key={index} />
      ))}
    </main>
  );
};

export default PostsContainer;
