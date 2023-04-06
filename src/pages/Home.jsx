import RandomCocktailList from '../components/RandomCocktailList.jsx';
import BottomPictures from '../components/BottomPictures.jsx';
import SearchSection from '../components/SearchSection.jsx';
import Introduction from '../components/Introduction.jsx';

const Home = () => {
  return (
    <>
      <Introduction />
      <SearchSection />
      <RandomCocktailList />;
      <BottomPictures />
    </>
  );
};

export default Home;
