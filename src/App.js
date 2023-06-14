import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./context";
// @import pages
import NotFound from "./pages/404";
import HomeScreen from "./pages/Home";
import TestScreen from "./pages/Test";
import ResultScreen from "./pages/Result";

import Logo from "./media/logo.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContextProvider>
          <header className="header">
            <Link to="/">
              <img
                src={Logo}
                title="Home"
                alt="site-logo"
                className="siteLogo"
              />
            </Link>
          </header>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/test" element={<TestScreen />} />
            <Route path="/result" element={<ResultScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
