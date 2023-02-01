import "./App.css";
import { Header } from "./components";
import { Home, About } from "./containers";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
