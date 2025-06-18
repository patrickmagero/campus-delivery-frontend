import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marketplace from './components/Marketplace';
import TopSellers from './components/TopSellers';
import TopSellerServices from './components/TopSellerServices.jsx';
import AboutDelivery from './components/AboutDelivery.jsx';
import FaqSection from './components/FaqSection.jsx';
import FooterSection from './components/FooterSection.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marketplace/>
      <TopSellers/>
      <TopSellerServices/>
      <AboutDelivery/>
      <FaqSection/>
      <FooterSection/>
    </>
  );
}

export default App;
