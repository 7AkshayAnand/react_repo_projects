import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const obj = useContext(PostListData);
  const newPostList = obj.postList;
  const fetching = obj.fetching;

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && newPostList.length == 0 && <WelcomeMessage />}
      {!fetching &&
        newPostList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
