import SearchBar from '../components/SearchBar.jsx';
import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import SearchFilter from '../components/SearchFilter.jsx';
import ListCocktails from '../components/ListCocktails.jsx';
import { SearchBarProvider } from '../contexts/SearchBarContext.jsx';
import { FilterSearchProvider } from '../contexts/FilterSearchContext.jsx';
import { CocktailsListProvider } from '../contexts/CocktailListContext.jsx';
import imageCocktail from '../assets/images/cara-cara.jpg';

const SearchCocktail = () => {
  return (
    <>
      <SearchBarProvider>
        <FilterSearchProvider>
          <Box bg='light.300' h='100vh' pt={19}>
            <Container maxW='full'>
              <Grid h='700px' templateRows='1fr' templateColumns={{ lg: 'repeat(5, 1fr)' }}>
                <GridItem display={{ base: 'none', md: 'block' }} rowSpan={2} colSpan={2} borderLeftRadius='5'>
                  <Image
                    display={{ base: 'none', md: 'block' }}
                    boxSize='full'
                    objectFit='cover'
                    src={imageCocktail}
                    alt='Picture of an orange cocktail'
                    borderLeftRadius='5'
                  />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderTopRightRadius='5'>
                  <SearchBar />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} bg='primary.400' borderBottomRightRadius='5' pb='2rem'>
                  <Container maxW='50rem' maxH='39rem' pt={{ md: '2rem', sm: '5rem', lg: '3rem' }}>
                    <SearchFilter />
                  </Container>
                </GridItem>
              </Grid>
            </Container>
            <CocktailsListProvider>
              <Box bg='light.300'>
                <Container maxW={{ sm: '50%', md: '50%', lg: '100%' }} pt={{ md: '10rem', sm: '15rem', lg: '4rem' }}>
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
