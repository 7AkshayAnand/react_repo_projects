import { useRef } from "react";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label for="userId" className="form-label">
            Enter your USERID here
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            placeholder="Your User ID"
          />
        </div>

        <div className="mb-3">
          <label for="title" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            type="text"
            rows="4"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="Tell use more about it"
          />
        </div>
        <div className="mb-3">
          <label for="reactions" className="form-label">
            Number Of reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label for="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Please enter tags using space"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            console.log("clicked");
            handleSubmit(event);
          }}
        >
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
