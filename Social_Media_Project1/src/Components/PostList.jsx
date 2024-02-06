import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  const obj = useContext(PostListData);
  const newPostList = obj.postList;

  return (
    <>
      {newPostList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
