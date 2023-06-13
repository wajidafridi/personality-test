import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeScreen from "./pages/Home";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <NotFound />,
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
