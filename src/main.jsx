import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountryProvider } from "./context/CountryContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleCountry from "./page/SingleCountry.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Layout from "./Layout/Layout.jsx";

function main() {
  return <div>main</div>;
}

export default main;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/country/:name",
        element: <SingleCountry />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={router} />
    </CountryProvider>
  </React.StrictMode>
);
