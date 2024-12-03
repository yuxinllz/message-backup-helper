import BlogPost from "./BlogPost";
import { BlogPostType } from "./types";

interface BlogListProps {
  posts: BlogPostType[];
  onReadClick: (postId: number) => void;
}

const BlogList = ({ posts, onReadClick }: BlogListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPost 
          key={post.id} 
          post={post}
          onReadClick={onReadClick}
        />
      ))}
    </div>
  );
};

export default BlogList;