import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import css from './styles/app.module.scss';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Footer />
  </div>;
};

export default App;
