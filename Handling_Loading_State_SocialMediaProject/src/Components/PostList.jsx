import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const obj = useContext(PostListData);
  const newPostList = obj.postList;
  const addInitialPost = obj.addInitialPost;

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);

        setFetching(false);
      });
  }, []);

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
