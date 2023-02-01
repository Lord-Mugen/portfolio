import "./App.css";
import { Header } from "./components";
import { Home, About, Skills } from "./containers";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
