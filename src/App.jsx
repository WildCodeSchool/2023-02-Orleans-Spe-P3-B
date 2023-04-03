import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CocktailsList from './pages/CocktailsList';
import FindCocktail from './pages/FindCocktails';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/the-cocktails' element={<CocktailsList />} />
        <Route path='/find-your-cocktail' element={<FindCocktail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
