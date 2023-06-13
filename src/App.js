import React from "react";

const App = () => {
  return (
    <div className="App">
      <main>Welcome to Personality Test</main>
      <footer className="App-footer">
        <p>
          &copy; {new Date().getFullYear()} Personality Test. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
