import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h2>Error</h2>,
      }
    ]
  },
 
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
