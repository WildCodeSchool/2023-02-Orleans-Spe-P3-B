import SearchBarContext from '../contexts/SearchBarContext.jsx';
import { useContext, useEffect, useState } from 'react';
import FilterSearchContext from '../contexts/FilterSearchContext.jsx';
import CocktailListContext from '../contexts/CocktailListContext.jsx';
import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import CardCocktailList from './CardCocktailList.jsx';

const ListCocktails = () => {
  const { search } = useContext(SearchBarContext);
  const { ingredient, isAlcoholic, category, glass } = useContext(FilterSearchContext);
  const { setCocktails, cocktails } = useContext(CocktailListContext);

  const urlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search;
  const urlIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient;
  const urlIsAlcoholic = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + isAlcoholic;
  const urlCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category;
  const urlGlass = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + glass;

  useEffect(
    () => {
      const abortController = new AbortController();
      fetch(urlSearch, {
        signal: abortController.signal,
      })
        .then(res => res.json())
        .then(data => setCocktails(data.drinks));
      return () => {
        abortController.abort();
      };
    },
    [urlSearch],
    5000,
  );
  useEffect(
    () => {
      const abortController = new AbortController();
      fetch(urlIngredient, {
        signal: abortController.signal,
      })
        .then(res => res.json())
        .then(data => setCocktails(data.drinks));
      return () => {
        abortController.abort();
      };
    },
    [urlIngredient],
    5000,
  );
  useEffect(
    () => {
      const abortController = new AbortController();
      fetch(urlIsAlcoholic, {
        signal: abortController.signal,
      })
        .then(res => res.json())
        .then(data => setCocktails(data.drinks));
      return () => {
        abortController.abort();
      };
    },
    [urlIsAlcoholic],
    5000,
  );
  useEffect(
    () => {
      const abortController = new AbortController();
      fetch(urlCategory, {
        signal: abortController.signal,
      })
        .then(res => res.json())
        .then(data => setCocktails(data.drinks));
      return () => {
        abortController.abort();
      };
    },
    [urlCategory],
    5000,
  );
  useEffect(
    () => {
      const abortController = new AbortController();
      fetch(urlGlass, {
        signal: abortController.signal,
      })
        .then(res => res.json())
        .then(data => setCocktails(data.drinks));
      return () => {
        abortController.abort();
      };
    },
    [urlGlass],
    5000,
  );

  return (
    <div>
      <Flex wrap='wrap'>
        {cocktails.map(drink => (
          <CardCocktailList {...drink} key={drink.idDrink} />
        ))}
      </Flex>
    </div>
  );
};

export default ListCocktails;
