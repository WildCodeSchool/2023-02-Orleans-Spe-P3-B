import './App.css';
import { Route, Routes } from 'react-router-dom';
import CocktailsList from './pages/CocktailsList';
import DiscoverCocktail from './pages/DiscoverCocktail.jsx';
import About from './pages/About';
import Home from './pages/Home.jsx';
import LegalNotice from './components/LegalNotice';
import Landing from './pages/Landing.jsx';
import WithoutNavBar from './WithoutNavBar.jsx';
import WithNavBar from './WithNavBar.jsx';
import DiscoverCocktailResults from './pages/DiscoverCocktailResults.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route element={<WithoutNavBar />}>
          <Route path='/' element={<Landing />} />
        </Route>
        <Route element={<WithNavBar />}>
          <Route path='/home' element={<Home />} />
          <Route path='/the-cocktails' element={<CocktailsList />} />
          <Route path='/find-your-cocktail' element={<FindCocktail />} />
          <Route path='/about' element={<About />} />
          <Route path='/legal-notice' element={<LegalNotice />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
