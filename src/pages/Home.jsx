import RandomCocktailList from '../components/RandomCocktailList.jsx';
import BottomPictures from '../components/BottomPictures.jsx';
import Introduction from '../components/Introduction.jsx';

const Home = () => {
  return (
    <>
      <Introduction />
      <RandomCocktailList />;
      <BottomPictures />
    </>
  );
};

export default Home;
