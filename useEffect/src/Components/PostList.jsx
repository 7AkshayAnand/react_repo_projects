import Post from "./Post";
import { useContext, useEffect } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
const PostList = () => {
  const obj = useContext(PostListData);
  const newPostList = obj.postList;
  const addInitialPost = obj.addInitialPost;

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  }, []);

  return (
    <>
      {newPostList.length == 0 && <WelcomeMessage />}
      {newPostList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
