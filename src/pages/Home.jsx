import RandomCocktailList from '../components/RandomCocktailList.jsx';
import BottomPictures from '../components/BottomPictures.jsx';
import SearchSection from '../components/SearchSection.jsx';

const Home = () => {
  return (
    <>
      <SearchSection />
      <RandomCocktailList />;
      <BottomPictures />
    </>
  );
};

export default Home;
