import RandomCocktail from './RandomCocktail.jsx';
import { Box, Center, Container, Heading, SimpleGrid } from '@chakra-ui/react';

const RandomCocktailList = () => {
  return (
    <Box>
      <Center>
        <Heading mt={10} mb={5} as='h1' size='2xl' color='light.200'>
          Discover new drinks
        </Heading>
      </Center>
      <Center>
        <SimpleGrid spacing={[4, 5, 10]} columns={[1, 2, 3]}>
          <RandomCocktail />
          <RandomCocktail />
          <RandomCocktail />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default RandomCocktailList;
