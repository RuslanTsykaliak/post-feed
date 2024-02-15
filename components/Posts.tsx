import EditPost from "./EditPost";
import RemovePost from "./RemovePost";
import { Post } from "@prisma/client";

const Posts = ({ post }: { post: Post }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl">
      <span className="text-center font-bold uppercase">
        {post.description}
      </span>
      <div className="flex items-center gap-5">
        <EditPost
          post={post}
        />
        <RemovePost
          post={post}
        />
      </div>
    </div>
  )
};

export default Posts;
