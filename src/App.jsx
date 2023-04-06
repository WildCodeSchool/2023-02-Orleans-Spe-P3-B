import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FindCocktail from './pages/FindCocktails';
import About from './pages/About';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import LegalNotice from './components/LegalNotice';
import SearchCocktail from './pages/SearchCocktail.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/the-cocktails' element={<SearchCocktail />} />
        <Route path='/find-your-cocktail' element={<FindCocktail />} />
        <Route path='/about' element={<About />} />
        <Route path='/legal-notice' element={<LegalNotice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
