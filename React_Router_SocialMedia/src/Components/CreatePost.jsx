import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label for="userId" className="form-label">
            Enter your USERID here
          </label>
          <input
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((resObj) => {
      console.log("data is ", resObj);
    });
  return redirect("/");
}
export default CreatePost;
