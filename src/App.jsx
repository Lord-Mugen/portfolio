import "./App.css";
import { Header, Services, Qualification, Contact } from "./components";
import { Home, About, Skills, Testimonials } from "./containers";

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
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
