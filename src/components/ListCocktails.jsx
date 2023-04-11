import SearchBarContext from '../contexts/SearchBarContext.jsx';
import { useContext, useEffect } from 'react';
import FilterSearchContext from '../contexts/FilterSearchContext.jsx';
import CocktailListContext from '../contexts/CocktailListContext.jsx';
import { Box, Flex, Heading } from '@chakra-ui/react';
import CardCocktailList from './CardCocktailList.jsx';

const ListCocktails = () => {
  const { search } = useContext(SearchBarContext);
  const { ingredient, isAlcoholic, category, glass } = useContext(FilterSearchContext);
  const { setCocktails, cocktails } = useContext(CocktailListContext);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`, {
      signal: abortController.signal,
    })
      .then(res => res.json())
      .then(data => setCocktails(data.drinks));
    return () => {
      abortController.abort();
    };
  }, [search, setCocktails]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`, {
      signal: abortController.signal,
    })
      .then(res => res.json())
      .then(data => setCocktails(data.drinks));
    return () => {
      abortController.abort();
    };
  }, [ingredient, setCocktails]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${isAlcoholic}`, {
      signal: abortController.signal,
    })
      .then(res => res.json())
      .then(data => setCocktails(data.drinks));
    return () => {
      abortController.abort();
    };
  }, [isAlcoholic, setCocktails]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`, {
      signal: abortController.signal,
    })
      .then(res => res.json())
      .then(data => setCocktails(data.drinks));
    return () => {
      abortController.abort();
    };
  }, [category, setCocktails]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`, {
      signal: abortController.signal,
    })
      .then(res => res.json())
      .then(data => setCocktails(data.drinks));
    return () => {
      abortController.abort();
    };
  }, [glass, setCocktails]);

  return (
    <Box maxW={{ sm: '18rem', md: '50rem', lg: '100%' }}>
      {cocktails ? (
        <Flex wrap='wrap' flexDirection={{ sm: 'column', md: 'row', lg: 'row' }} justifyContent='center'>
          {cocktails.map(drink => (
            <CardCocktailList {...drink} key={drink.idDrink} />
          ))}
        </Flex>
      ) : (
        <Heading as='h3'>{`We are sorry but this drink doesn't exist in our database.`}</Heading>
      )}
    </Box>
  );
};

export default ListCocktails;
