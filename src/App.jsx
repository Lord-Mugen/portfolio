import "./App.css";
import { Header } from "./components";
import { Home, About, Skills, Services } from "./containers";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;
