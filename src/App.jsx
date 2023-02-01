import "./App.css";
import { Header, Services, Qualification } from "./components";
import { Home, About, Skills } from "./containers";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
