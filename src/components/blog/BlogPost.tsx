import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { BlogPostType } from "./types";

interface BlogPostProps {
  post: BlogPostType;
  onReadClick: (postId: number) => void;
}

const BlogPost = ({ post, onReadClick }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold leading-tight hover:text-joey-sage transition-colors">
          {post.title}
        </h2>
        
        <p className="text-sm text-joey-muted">
          {post.recommendedBecause}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <Button 
            variant="default"
            className="bg-joey-sage hover:bg-joey-sage/90 text-white px-8"
            onClick={() => onReadClick(post.id)}
          >
            Read
          </Button>
          
          <Button
            variant="ghost"
            className="text-gray-600"
            onClick={() => {}}
          >
            Share <Share className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;