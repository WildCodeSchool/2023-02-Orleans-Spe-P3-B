import SearchBar from '../components/SearchBar.jsx';
import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import SearchFilter from '../components/SearchFilter.jsx';
import ListCocktails from '../components/ListCocktails.jsx';
import { SearchBarProvider } from '../contexts/SearchBarContext.jsx';
import { FilterSearchProvider } from '../contexts/FilterSearchContext.jsx';
import { CocktailsListProvider } from '../contexts/CocktailListContext.jsx';

const SearchCocktail = () => {
  return (
    <>
      <SearchBarProvider>
        <FilterSearchProvider>
          <Box bg='light.300' h='100vh' pt={20}>
            <Container maxW='full'>
              <Grid h='700px' templateRows='repeat(3, 1fr)' templateColumns={{ sm: '1fr', md: 'repeat(5, 1fr)' }}>
                <GridItem display={{ base: 'none', md: 'block' }} rowSpan={2} colSpan={2} borderLeftRadius='5'>
                  <Image
                    display={{ base: 'none', md: 'block' }}
                    boxSize='full'
                    objectFit='cover'
                    src='./src/assets/images/cara-cara.jpg'
                    alt='Picture of an orange cocktail'
                    borderLeftRadius='5'
                  />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderTopRightRadius='5'>
                  <SearchBar />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderBottomRightRadius='5'>
                  <Container maxW='50rem' h='39rem' pt={{ base: '100', md: '100', sm: '0' }}>
                    <SearchFilter />
                  </Container>
                </GridItem>
              </Grid>
            </Container>
            <CocktailsListProvider>
              <Box bg='light.300'>
                <Container maxW='100vw' pt='10rem'>
                  <ListCocktails />
                </Container>
              </Box>
            </CocktailsListProvider>
          </Box>
        </FilterSearchProvider>
      </SearchBarProvider>
    </>
  );
};

export default SearchCocktail;
