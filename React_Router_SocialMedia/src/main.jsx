import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import PostList, { postLoader } from "./Components/PostList.jsx";
//import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "./Components/CreatePost.jsx";

//APPROACH-1
/* here when path is "/" then App will be loaded by default when path is "/create-post" then CreatePost will be loaded but in CretePost there will be no header and sidebar . 
so we have to resolve that problem 
*/

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/create-post", element: <CreatePost /> },
// ]);

//APPROACH-2
/*when path is "/" then App will be loaded by default then afte App if path is again "/" then PostList will be loaded 
  if path is "/create-post then CreatePost will be loaded".  

  By doing so we ensure that sidebar and header and footer will be avialable for all as by defalut App will be loaded with these two 
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      //this postLoader function (present in PostList component)will execute before PostList path then it reutrs a data which will be avaiable
      //for PostList
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
