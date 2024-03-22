import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg max-w-xs text-center  mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm text-gray-600 mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>
        <button className="border Dfont-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Back
        </button>
      </Link>
    </div>
  );
}
