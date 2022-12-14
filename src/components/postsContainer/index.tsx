import { useAppSelector } from '../../app/Hooks';
import { selectPosts } from '../../app/PostsSlice';

const PostsContainer = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <main>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </main>
  );
};

export default PostsContainer;
