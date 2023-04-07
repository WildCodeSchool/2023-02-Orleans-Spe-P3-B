import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CocktailsList from './pages/CocktailsList';
import DiscoverCocktail from './pages/DiscoverCocktail.jsx';
import About from './pages/About';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import LegalNotice from './components/LegalNotice';
import DiscoverCocktailResults from './pages/DiscoverCocktailResults.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/the-cocktails' element={<CocktailsList />} />
        <Route path='/discover-a-cocktail' element={<DiscoverCocktail />} />
        <Route path='/discover-a-cocktail-results/:cocktailId' element={<DiscoverCocktailResults />} />
        <Route path='/about' element={<About />} />
        <Route path='/legal-notice' element={<LegalNotice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
