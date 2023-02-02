import "./App.css";
import {
  Header,
  Services,
  Qualification,
  Contact,
  Footer,
  ScrollUp,
} from "./components";
import { Home, About, Skills, Testimonials, Work } from "./containers";

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
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
