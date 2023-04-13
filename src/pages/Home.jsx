import RandomCocktailList from '../components/RandomCocktailList.jsx';
import BottomPictures from '../components/BottomPictures.jsx';
import SearchSection from '../components/SearchSection.jsx';
import Introduction from '../components/Introduction.jsx';
import QuizHomeSection from '../components/QuizHomeSection.jsx';

const Home = () => {
  return (
    <>
      <Introduction />
      <SearchSection />
      <RandomCocktailList />
      <QuizHomeSection />
      <BottomPictures />
    </>
  );
};

export default Home;
