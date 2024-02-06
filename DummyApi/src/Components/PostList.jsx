import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const obj = useContext(PostListData);
  const newPostList = obj.postList;
  const addInitialPost = obj.addInitialPost;

  const handleGetPostsClick = () => {
    console.log("get posts clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {newPostList.length == 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {newPostList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
