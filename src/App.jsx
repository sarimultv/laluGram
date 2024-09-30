import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import PostContainer from "./components/PostContainer";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import ErrorPage from "./components/ErrorPage";
import { lazy, Suspense } from "react";
import LoadingPage from "./components/LoadingPage";

function App() {
  const PostView = lazy(() => import("./components/PostView"));
  const UserFeed = lazy(() => import("./components/UserFeed"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <PostContainer /> },
        {
          path: "/feed",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <UserFeed />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "/postView/:imgId",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <PostView />
            </Suspense>
          ),
          errorElement: <ErrorPage />,
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
