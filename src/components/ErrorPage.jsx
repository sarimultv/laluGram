import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center bg-gray-950 h-screen text-white flex justify-center items-center">
      <span className="text-5xl">
        {error.status} {error.statusText}
      </span>
    </div>
  );
};

export default ErrorPage;
