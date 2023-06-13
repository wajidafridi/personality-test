import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppContextProvider } from "./context";
import HomeScreen from "./pages/Home";
import TestScreen from "./pages/Test";
import ResultScreen from "./pages/Result";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <NotFound />,
  },
  {
    path: "/test",
    element: <TestScreen />,
  },
  {
    path: "/result",
    element: <ResultScreen />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </div>
  );
};

export default App;
