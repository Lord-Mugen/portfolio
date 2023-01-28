import "./home.css";
import { Social, Info, ScrollDown } from "../../components/";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Info />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
