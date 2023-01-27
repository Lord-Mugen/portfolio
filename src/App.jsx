import { useState } from "react";
import "./App.css";

import { Header } from "./components";
import { Home } from "./containers";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
