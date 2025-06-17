import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marketplace from './components/Marketplace';
import TopSellers from './components/TopSellers';
import TopSellerServices from './components/TopSellerServices.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marketplace/>
      <TopSellers/>
      <TopSellerServices/>
    </>
  );
}

export default App;
