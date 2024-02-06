import Post from "./Post";

import { useLoaderData } from "react-router-dom";
const PostList = () => {
  // it returns the fetched data from fetch api
  const newPostList = useLoaderData();

  return (
    <>
      {newPostList.length == 0 && <WelcomeMessage />}
      {newPostList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
