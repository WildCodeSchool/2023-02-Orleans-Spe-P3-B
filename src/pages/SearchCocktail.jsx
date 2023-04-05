import SearchBar from '../components/SearchBar.jsx';
import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import SearchFilter from '../components/SearchFilter.jsx';
import ListCocktails from '../components/ListCoktails.jsx';
import { SearchBarProvider } from '../contexts/SearchBarContext.jsx';
import { FilterSearchProvider } from '../contexts/FilterSearchContext.jsx';
import { CocktailsListProvider } from '../contexts/CocktailListContext.jsx';

const SearchCocktail = () => {
  return (
    <>
      <SearchBarProvider>
        <FilterSearchProvider>
          <Box bg='light.300' h='100%'>
            <Container maxW='full'>
              <Grid h='700px' templateRows='repeat(3, 1fr)' templateColumns='repeat(5, 1fr)'>
                <GridItem rowSpan={2} colSpan={2} border='2px' borderColor='black.200' borderLeftRadius='5'>
                  <Image boxSize='full' objectFit='cover' src='./src/assets/images/cara-cara.jpg' alt='Dan Abramov' />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderTopRightRadius='5'>
                  <SearchBar />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderBottomRightRadius='5'>
                  <Container maxW='50rem' h='30rem' paddingBlockStart={75}>
                    <SearchFilter />
                  </Container>
                </GridItem>
              </Grid>
            </Container>
            <CocktailsListProvider>
              <Container maxW='90%'>
                <ListCocktails />
              </Container>
            </CocktailsListProvider>
          </Box>
        </FilterSearchProvider>
      </SearchBarProvider>
    </>
  );
};

export default SearchCocktail;
