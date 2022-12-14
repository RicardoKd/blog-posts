import { useAppSelector } from '../../app/Hooks';
import { selectPosts } from '../../app/PostsSlice';
import BlogPost from '../blogPost';

const PostsContainer = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <main>
      <div className="blogPostsWrapper">
        {posts.map((post, index) => (
          <BlogPost post={post} key={index} />
        ))}
      </div>
    </main>
  );
};

export default PostsContainer;
