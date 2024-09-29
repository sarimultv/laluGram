import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import UserFeed from "./components/UserFeed";
import PostContainer from "./components/PostContainer";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import ErrorPage from "./components/ErrorPage";
import PostView from "./components/PostView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <PostContainer /> },
        {
          path: "/feed",
          element: <UserFeed />,
        },
        {
          path: "/postView/:imgId",
          element: <PostView />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
