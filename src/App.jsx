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
import DescriptionCocktail from './components/DescriptionCocktail';
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
          <Route path='/about' element={<About />} />
          <Route path='/legal-notice' element={<LegalNotice />} />
          <Route path='/description/:drinkId' element={<DescriptionCocktail />} />
          <Route path='/discover-a-cocktail' element={<DiscoverCocktail />} />
          <Route path='/discover-a-cocktail-results/:cocktailId' element={<DiscoverCocktailResults />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
