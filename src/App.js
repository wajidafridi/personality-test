import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Personality Test</div>,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
  {
    path: "/result",
    element: <div>result</div>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
